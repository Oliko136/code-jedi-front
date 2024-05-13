"use strict";(self.webpackChunkcode_jedi_front=self.webpackChunkcode_jedi_front||[]).push([[534],{7365:(n,e,o)=>{o.d(e,{A:()=>u});var t,r,i,a=o(5043),l=o(7950),c=o(4506),d=o(7528),s=o(7205);const p=s.Ay.div(t||(t=(0,d.A)(["\n  // position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5); /* Add opacity for background */\n  z-index: 9999; /* Ensure it's above other content */\n"]))),x=s.Ay.div(r||(r=(0,d.A)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  justify-content: center;\n  align-items: center;\n  min-height: 130px;\n  border-radius: 8px;\n  padding: 24px;\n  color: var(--primary-text-color);\n  background: var(--input-bg-color);\n  z-index: 10000; /* Ensure it's above the opacity layer */\n  width: ","px;\n"])),(n=>{let{$Width:e}=n;return e})),h=s.Ay.button(i||(i=(0,d.A)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  background-color: transparent;\n  padding: 0;\n\n  @media screen and (min-width: 1440px) {\n    &:hover svg,\n    &:focus svg {\n      filter: drop-shadow(1px 1px 3px var(--additional-icon-color));\n    }\n  }\n"])));var g=o(579);const u=n=>{let{children:e,width:o,height:t,onClose:r,developers:i=!1}=n;const d=document.getElementById("modal-root");return(0,a.useEffect)((()=>{const n=n=>{"Escape"===n.code&&r()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}),[r]),(0,l.createPortal)((0,g.jsx)(p,{onClick:r,children:(0,g.jsxs)(x,{$developers:i,$Width:o,$Height:t,onClick:n=>n.stopPropagation(),children:[(0,g.jsx)(h,{type:"button","aria-label":"Close modal",onClick:r,children:(0,g.jsx)(c.A,{width:18,height:18,strokeColor:"var(--icon-color)",name:"close"})}),e]})}),d)}},7534:(n,e,o)=>{o.r(e),o.d(e,{default:()=>lo});var t,r,i=o(5043),a=o(3003),l=o(3216),c=o(4506),d=o(7528),s=o(7205);const p=s.Ay.button(t||(t=(0,d.A)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 14px;\n  right: 14px;\n"]))),x=(0,s.Ay)(c.A)(r||(r=(0,d.A)(["\n  width: 18px;\n  height: 18px;\n  stroke: var(--icon-color);\n  // transition: stroke 250ms linear;\n\n  &:hover > svg {\n    stroke: #559840;\n  }\n"])));var h=o(579);const g=n=>{let{onClick:e}=n;return(0,h.jsx)(p,{onClick:e,children:(0,h.jsx)(x,{width:18,height:18,fillColor:"none",strokeColor:"var(--icon-color)",name:"close"})})};var u=o(4163),b=o(6446),y=o(2195),m=o(9964),v=o(7890);const f=n=>{let{onFilterChange:e,priority:o}=n;const[t,r]=(0,i.useState)(o||"Without"),a=[{value:"Without",label:"Without priority",labelColor:"var(--additional-text-color-op)",radioColor:{static:"var(--without-filter-lable)",onChecked:"var( --additional-bg-color)"}},{value:"Low",label:"Low",labelColor:"#8FA1D0",radioColor:{static:"#8FA1D0",onChecked:"var( --additional-bg-color)"}},{value:"Medium",label:"Medium",labelColor:"#E09CB5",radioColor:{static:"#E09CB5",onChecked:"var( --additional-bg-color)"}},{value:"High",label:"High",labelColor:"#BEDBB0",radioColor:{static:"#BEDBB0",onChecked:"var( --additional-bg-color)"}}];return(0,h.jsx)(b.A,{sx:{display:"flex",flexDirection:"column",alignItems:"flexStart",width:"120px"},children:(0,h.jsx)(y.A,{"aria-labelledby":"radio-buttons-group-label",value:t,name:"radio-buttons-group",onChange:n=>{const o=n.target.value;r(o),e(o)},sx:{display:"flex",flexDirection:"row",gap:"8px"},children:a.map((n=>{const{value:e,label:o,labelColor:t,radioColor:r}=n;return(0,h.jsx)(m.A,{value:e,sx:{display:"flex",gap:"8px",margin:"0",height:"24px","& .MuiTypography-root":{fontFamily:"Poppins",fontSize:"12px",color:t}},control:(0,h.jsx)(v.A,{sx:{width:"14px",height:"14px",color:"transparent",backgroundColor:r.static,"&.Mui-checked":{color:r.static,backgroundColor:r.onChecked}},disableRipple:!0}),label:o},e)}))})})};var A,j,k,w,C,_;const z=s.Ay.div(A||(A=(0,d.A)(["\n  width: 300px;\n  padding: 24px;\n  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);\n  background: var(--bg-theme);\n  // background: #151515;\n  border-radius: 8px;\n  position: relative;\n  // color: var(--color);\n"]))),D=s.Ay.p(j||(j=(0,d.A)(["\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: -0.02em;\n\n  color:var(--additional-text-color);\n\n  margin-bottom: 14px;\n"]))),M=s.Ay.hr(k||(k=(0,d.A)(["\n  border: none;\n  height: 1px;\n  background-color: var(--line-filter);\n  margin: 0;\n  margin-bottom: 14px;\n"]))),E=s.Ay.div(w||(w=(0,d.A)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 14px;\n"]))),S=s.Ay.p(C||(C=(0,d.A)(["\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: var(--additional-text-color);\n"]))),B=s.Ay.button(_||(_=(0,d.A)(["\n  font-family: inherit;\n  font-size: 12px;\n  letter-spacing: -0.02em;\n  text-decoration: underline;\n  text-decoration-skip-ink: none;\n  color: var(--show-filter-txt);\n  border: none;\n  outline: none;\n  background-color: transparent;\n  transition: color 250ms linear;\n\n  &:hover {\n    color: var(--additional-text-color-op);\n\n  }\n"]))),F=n=>{let{onClose:e}=n;const o=(0,a.wA)(),[t,r]=(0,i.useState)("all");return(0,h.jsxs)(z,{children:[(0,h.jsx)(g,{onClick:e}),(0,h.jsx)(D,{children:"Filters"}),(0,h.jsx)(M,{}),(0,h.jsxs)(E,{children:[(0,h.jsx)(S,{children:"Label color"}),(0,h.jsx)(B,{onClick:()=>{o((0,u.R)("all")),r("all")},children:"Show all"})]}),(0,h.jsx)(f,{onFilterChange:n=>{o((0,u.R)(n)),r(n)},priority:t})]})};var P,L,R,Y,I,W,$=o(3377);const T=s.Ay.div(P||(P=(0,d.A)(["\ndisplay: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 39px;\n"]))),q=s.Ay.h4(L||(L=(0,d.A)(["\nfont-weight: 500;\nfont-size: 14px;\nletter-spacing: -0.02em;\ncolor: var(--additional-text-color);\n"]))),H=s.Ay.h4(R||(R=(0,d.A)(["\nfont-weight: 500;\nfont-size: 14px;\nletter-spacing: -0.02em;\ncolor: var(--additional-text-color);\n"]))),N=s.Ay.button(Y||(Y=(0,d.A)(["\ndisplay: flex;\ngap:8px;\njustify-content: space-between;\ncursor: pointer;\n\n  &:hover {\n    stroke: #bedbb0;\n  }\n"]))),G=s.Ay.div(I||(I=(0,d.A)(["\n// display: flex;\n// gap:8px;\n// flex-direction: row;\n// justify-content: space-between;\n\n\n  // padding: 10px; \n"]))),V=s.Ay.div(W||(W=(0,d.A)(["\n  display: flex;\n  // flex-direction: column;\n  // justify-content: flex-end;\n"])));var J=o(7365);const K=()=>{const n=(0,a.d4)($.AA),{title:e}=n;console.log(e);const[o,t]=(0,i.useState)(!1),r=()=>{t(!o)};return(0,h.jsxs)(T,{children:[(0,h.jsx)(q,{children:"title"}),(0,h.jsxs)(V,{children:[(0,h.jsx)(G,{children:(0,h.jsxs)(N,{type:"button",onClick:()=>{t(!0)},children:[(0,h.jsx)(c.A,{width:16,height:16,fillColor:"none",strokeColor:"var(--additional-text-color)",name:"filter"}),(0,h.jsx)(H,{children:"Filters"})]})}),o&&(0,h.jsx)(J.A,{open:o,onClose:r,children:(0,h.jsx)(F,{onClose:r})})]})]})},O=n=>n.columns.columns;var Q,U,X,Z,nn,en,on,tn;const rn=s.Ay.ul(Q||(Q=(0,d.A)(["\n  display: flex;\n  gap: 28px;\n"]))),an=s.Ay.li(U||(U=(0,d.A)(["\n  display: block;\n"]))),ln=s.Ay.div(X||(X=(0,d.A)(["\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  background-color: black;\n  border-radius: 8px;\n  align-items: center;\n  width: 334px;\n  height: 56px;\n  margin-bottom: 10px;\n\n  h3 {\n    font-size: 16px;\n    font-weight: 500;\n    color: white;\n    width: 260px;\n  }\n"]))),cn=s.Ay.div(Z||(Z=(0,d.A)(["\n  display: flex;\n  gap: 8px;\n"]))),dn=s.Ay.button(nn||(nn=(0,d.A)([""]))),sn=s.Ay.svg(en||(en=(0,d.A)(["\n  stroke: rgba(255, 255, 255, 0.5);\n  width: 16px;\n  height: 16px;\n  opacity: 50%;\n  transition: 350ms ease-in-out;\n\n  &:hover {\n    opacity: 100%;\n  }\n"]))),pn=s.Ay.button(on||(on=(0,d.A)(["\n  display: flex;\n  width: 100%;\n  padding: 14px 79px;\n  background-color: var(--highPriorityColor);\n  color: black;\n  border-radius: 8px;\n  align-items: center;\n  gap: 8px;\n  transition: 350ms ease-in-out;\n\n  &:hover {\n    background-color: #b0eebe;\n  }\n"]))),xn=s.Ay.svg(tn||(tn=(0,d.A)(["\n  background-color: black;\n  border-radius: 8px;\n  width: 28px;\n  height: 28px;\n  stroke: white;\n  padding: 5px 7px 8px 6px;\n"])));var hn,gn,un,bn,yn,mn,vn,fn,An,jn,kn,wn,Cn,_n,zn,Dn,Mn,En=o(6556),Sn=o(7235);const Bn=s.Ay.div(hn||(hn=(0,d.A)(["\n  display: flex;\n  min-width: 100%;\n  border-radius: 8px;\n  margin-bottom: 8px;\n\n\n  background: var(--btn-add-column);\n\n\n\n  @media screen and (min-width: 375px) {\n    width: 335px;\n    height: 154px;\n  }\n\n \n"]))),Fn=s.Ay.h4(gn||(gn=(0,d.A)(["\nfont-weight: 600;\nfont-size: 14px;\nletter-spacing: -0.02em;\n  color: var(--icon-color);\n  padding-bottom: 8px;\n"]))),Pn=s.Ay.div(un||(un=(0,d.A)(["\n  \n  width: 4px;\n  min-height: 100%;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n\n  // background-color: var(--highPriorityColor);\n"]))),Ln=s.Ay.div(bn||(bn=(0,d.A)(["\n  // background-color: #121212;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  max-width: 334px;\n  padding: 14px 24px;\n\n  // h3 {\n  //   font-size: 14px;\n  //   font-weight: 600;\n  //   margin-bottom: 14px;\n  // }\n"]))),Rn=s.Ay.div(yn||(yn=(0,d.A)(["\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--cart-text);\n  // border-bottom: 1 px solid var(--stroke-card);\n  margin-bottom: 14px;\n  line-height: 133%;\nletter-spacing: -0.02em;\noverflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  white-space: normal;\n  // width: calc(100% - 20px);\n"]))),Yn=s.Ay.hr(mn||(mn=(0,d.A)(["\n  border: none;\n  height: 1px;\n  background-color: var(--cart-text);\n  margin: 0;\n  margin-bottom: 14px;\n"]))),In=s.Ay.div(vn||(vn=(0,d.A)(["\n  display: flex;\n"]))),Wn=s.Ay.div(fn||(fn=(0,d.A)(["\n  margin-right: 16px;\n\n  div {\n    display: flex;\n    gap: 4px;\n  }\n"]))),$n=s.Ay.p(An||(An=(0,d.A)(["\n  font-size: 8px;\n  font-weight: 400;\n  color: var(--cart-text);\n  letter-spacing: -0.02em;\n  // margin-bottom: 8px;\n  // margin-top: 16px;\n"]))),Tn=s.Ay.div(jn||(jn=(0,d.A)(["\n  width: 12px;\n  height: 12px;\n  background-color: var(--highPriorityColor);\n  border-radius: 50px;\n"]))),qn=s.Ay.p(kn||(kn=(0,d.A)(["\n  font-size: 10px;\n  font-weight: 400;\n  color: var(--icon-color);\n  letter-spacing: -0.02em;\n"]))),Hn=s.Ay.div(wn||(wn=(0,d.A)(["\n  margin-right: 116px;\n  div {\n    display: flex;\n    gap: 4px;\n  }\n"]))),Nn=s.Ay.p(Cn||(Cn=(0,d.A)(["\n  font-size: 8px;\n  font-weight: 400;\n  color: var(--cart-text);\n  // margin-bottom: 8px;\n  // margin-top: 16px;\n"]))),Gn=s.Ay.p(_n||(_n=(0,d.A)(["\n  font-size: 10px;\n  font-weight: 400;\n  color: var(--icon-color);\n"]))),Vn=s.Ay.div(zn||(zn=(0,d.A)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  // padding-top: 24px;\n"]))),Jn=s.Ay.button(Dn||(Dn=(0,d.A)([""]))),Kn=s.Ay.svg(Mn||(Mn=(0,d.A)(["\n  stroke: var(--cart-text);\n  opacity: 50%;\n  width: 16px;\n  height: 16px;\n  transition: 350ms ease-in-out;\n\n  &:hover {\n    opacity: 100%;\n  }\n"]))),On=n=>n.cards.cards;function Qn(n){const e=n.split("-");return e[2]+"/"+e[1]+"/"+e[0]}const Un=()=>{const n=new Date,e=(0,a.d4)(On),{title:o,description:t,priority:r,deadline:i="2024-05-13"}=e;console.log(o);console.log(n),console.log("qwe");const l=(c=n).getFullYear()+"-"+(c.getMonth()+1).toString().padStart(2,"0")+"-"+c.getDate().toString().padStart(2,"0");var c;return console.log(l),(0,h.jsxs)(Bn,{children:[(0,h.jsx)(Pn,{style:{backgroundColor:"red"}}),(0,h.jsxs)(Ln,{children:[(0,h.jsx)(Fn,{children:o}),(0,h.jsx)(Rn,{children:t}),(0,h.jsx)(Yn,{}),(0,h.jsxs)(In,{children:[(0,h.jsxs)(Wn,{children:[(0,h.jsx)($n,{children:"Priority"}),(0,h.jsxs)("div",{children:[(0,h.jsx)(Tn,{style:{backgroundColor:"red"}}),(0,h.jsx)(qn,{children:r})]})]}),(0,h.jsxs)(Hn,{children:[(0,h.jsx)(Nn,{children:"Deadline"}),(0,h.jsx)(Gn,{children:Qn(i)})]}),(0,h.jsxs)(Vn,{children:[i===l&&(0,h.jsx)(Jn,{children:(0,h.jsx)(Kn,{children:(0,h.jsx)("use",{href:"".concat(Sn.A,"#bell")})})}),(0,h.jsx)(Jn,{children:(0,h.jsx)(Kn,{children:(0,h.jsx)("use",{href:"".concat(Sn.A,"#broken-right")})})}),(0,h.jsx)(Jn,{children:(0,h.jsx)(Kn,{children:(0,h.jsx)("use",{href:"".concat(Sn.A,"#pencil")})})}),(0,h.jsx)(Jn,{children:(0,h.jsx)(Kn,{children:(0,h.jsx)("use",{href:"".concat(Sn.A,"#trash")})})})]})]})]})]})};var Xn,Zn,ne,ee,oe,te,re,ie,ae,le,ce;const de=s.Ay.form(Xn||(Xn=(0,d.A)(["\n  border-radius: 8px;\n  width: 100%;\n  &:hover {\n    border-color: var(--accent-icon-hover-color);\n  }\n  @media screen and (min-width: 1440px) {\n    input {\n      width: 100%;\n    }\n  }\n"]))),se=s.Ay.h2(Zn||(Zn=(0,d.A)(["\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: -0.02em;\n  color: var(--input-text-color);\n  margin-bottom: 24px;\n"]))),pe=s.Ay.input(ne||(ne=(0,d.A)(["\n  width: 100%;\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  height: 49px;\n  opacity: 0.4;\n  margin-bottom: 14px;\n  color: var(--input-text-color) !important;\n  padding: 14px 18px;\n  background-color: transparent;\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n  &:hover {\n    opacity: 1;\n  }\n"]))),xe=s.Ay.textarea(ee||(ee=(0,d.A)(["\n  width: 100%;\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  height: 154px;\n  opacity: 0.4;\n  margin-bottom: 24px;\n  color: var(--input-text-color) !important;\n  padding: 14px 18px;\n  background-color: transparent;\n  font-family: inherit;\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n  &:hover {\n    opacity: 1;\n  }\n"]))),he=s.Ay.p(oe||(oe=(0,d.A)(["\n  font-size: 12px;\n  letter-spacing: -0.02em;\n  color: rgba(255, 255, 255, 0.5);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 4px;\n"]))),ge=s.Ay.label(te||(te=(0,d.A)(["\n  width: 14px;\n  height: 14px;\n  border-radius: 100%;\n"]))),ue=s.Ay.div(re||(re=(0,d.A)(["\n  display: flex;\n  margin-bottom: 14px;\n  gap: 8px;\n"]))),be=s.Ay.input(ie||(ie=(0,d.A)(["\n  display: none;\n  cursor: pointer;\n  &:checked + svg use {\n    stroke-opacity: 1;\n    transform: scale(1.05);\n  }\n"]))),ye=s.Ay.button(ae||(ae=(0,d.A)(["\n  border-radius: 8px;\n  width: 100%;\n  height: 49px;\n  background-color: var(--input-border-color);\n  color: var(--btn-text-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),me=s.Ay.div(le||(le=(0,d.A)(["\n  width: 64px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  letter-spacing: -0.02em;\n  color: var(--btn-text-color);\n"]))),ve=s.Ay.div(ce||(ce=(0,d.A)(["\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background-color: var(--btn-text-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),fe=n=>{let{value:e,onChange:o}=n;const t=n=>{o(n.target.value)};return(0,h.jsx)(ue,{children:[{priority:"low",color:"#8FA1D0"},{priority:"medium",color:"#E09CB5"},{priority:"high",color:"#BEDBB0"},{priority:"without",color:"rgba(255, 255, 255, 0.3)"}].map((n=>{let{priority:o,color:r}=n;return(0,h.jsxs)(ge,{children:[(0,h.jsx)(be,{type:"radio",name:"color",value:r,checked:e===r,onChange:t}),(0,h.jsx)(c.A,{fillColor:r,name:e===r?"radio-button-checked":"radio-button-unchecked"})]},o)}))})};var Ae,je,ke,we=o(1899),Ce=o.n(we);o(5015);const _e=s.Ay.button(Ae||(Ae=(0,d.A)(["\n  display: flex;\n  gap: 4px;\n  align-items: flex-end;\n  justify-content: center;\n  text-align: center;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-weight: 500;\n  /* font-size: 14px; */\n  letter-spacing: -0.02em;\n  color: var(--additional-btn-bg-color);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: var(--accent-icon-hover-color);\n  }\n"]))),ze=s.Ay.svg(je||(je=(0,d.A)(["\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: currentColor;\n"]))),De=s.Ay.div(ke||(ke=(0,d.A)(["\n  .react-datepicker {\n    font-family: inherit;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    background-color: var(--calendar-bg-color);\n    border: 1px solid var(--additional-icon-color);\n    border-radius: 8px;\n    padding: 18px;\n    width: 233px;\n    height: 254px;\n  }\n\n  .react-datepicker-popper > svg {\n    display: none;\n  }\n\n  .react-datepicker-popper {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .react-datepicker__month-container {\n    position: absolute;\n    padding: 18px;\n    width: 233px;\n    height: 254px;\n  }\n\n  .react-datepicker__header {\n    border: none;\n    background-color: transparent;\n    padding: 0;\n  }\n\n  .react-datepicker__month {\n    margin: 0;\n    margin-top: 11px;\n  }\n\n  .react-datepicker__current-month {\n    padding-bottom: 14px;\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: -0.02em;\n    color: var(--btn-icon-color);\n  }\n\n  .react-datepicker__day-names {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n    gap: 12px;\n    border-top: 1px solid var(--calendar-additional-color-trans);\n    padding-top: 14px;\n  }\n\n  .react-datepicker__day-name {\n    display: inline-flex;\n    color: var(--calendar-text-color-trans);\n    font-family: 'Poppins', sans-serif;\n    font-weight: 500;\n    font-size: 14px;\n    letter-spacing: -0.02em;\n    margin: 0;\n    width: 100%;\n  }\n\n  .react-datepicker__day {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 400;\n    font-size: 14px;\n    letter-spacing: -0.02em;\n    width: 22px;\n    height: 22px;\n    margin: 0;\n    border-radius: 50%;\n    color: var(--btn-icon-color);\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .react-datepicker__day:hover,\n  .react-datepicker__day:focus {\n    background-color: var(--additional-btn-bg-hover-color);\n    color: var(--calendar-secondary-hover-color);\n  }\n\n  .react-datepicker__day--disabled {\n    color: var(--calendar-additional-color-trans);\n  }\n\n  .react-datepicker__day--outside-month {\n    color: var(--calendar-additional-color-trans);\n  }\n\n  .react-datepicker__day--today {\n    border-radius: 50%;\n    text-align: center;\n  }\n\n  .react-datepicker__day--selected {\n    background-color: var(--additional-btn-bg-hover-color);\n    color: var(--calendar-secondary-hover-color);\n    border-radius: 50%;\n  }\n\n  .react-datepicker__week {\n    display: flex;\n  }\n\n  .react-datepicker__week > * {\n    flex: 1;\n    margin-right: 8px;\n  }\n\n  .react-datepicker__week > *:last-child {\n    margin-right: 0;\n  }\n\n  .react-datepicker__day--keyboard-selected {\n    background-color: transparent;\n  }\n\n  .react-datepicker__navigation {\n    cursor: pointer;\n    position: absolute;\n    top: 10px;\n  }\n\n  .react-datepicker__navigation-icon::before {\n    border-color: var(--additional-icon-color);\n    border-style: solid;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .react-datepicker__navigation:hover\n    .react-datepicker__navigation-icon::before {\n    border-color: var(--additional-text-color-op);\n  }\n"]))),Me=n=>{let{date:e,changeDate:o}=n;const t=(0,i.forwardRef)(((n,e)=>{let{value:o,onClick:t}=n;return(0,h.jsxs)(_e,{type:"button",onClick:t,ref:e,children:[o,(0,h.jsx)(ze,{children:(0,h.jsx)(c.A,{name:"chevron-down"})})]})}));return(0,h.jsx)(De,{children:(0,h.jsx)(Ce(),{className:"datePicker",selected:e,onChange:o,minDate:new Date,dateFormat:(n=>{if(!(n instanceof Date))return"MMMM dd, yyyy";const e=new Date;return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()?"'Today', MMMM dd":"EEEE, MMMM dd"})(e),customInput:(0,h.jsx)(t,{})})})};var Ee=o(7202);const Se=n=>{let{showModal:e}=n;const[o,t]=(0,i.useState)(""),[r,l]=(0,i.useState)(""),[d,s]=(0,i.useState)("without"),[p,x]=(0,i.useState)(new Date),g=(0,a.wA)();return(0,h.jsx)(J.A,{width:335,height:522,onClose:()=>e(!1),children:(0,h.jsxs)(de,{onSubmit:n=>{n.preventDefault();const e={title:o.trim(),description:r.trim(),cardPriority:d,deadline:p};g((0,Ee.YI)(e))},children:[(0,h.jsx)(se,{children:"Add card"}),(0,h.jsx)(pe,{value:o,onChange:n=>t(n.target.value),required:!0,type:"text",name:"title",placeholder:"Title"}),(0,h.jsx)(xe,{value:r,onChange:n=>l(n.target.value),type:"text",name:"description",placeholder:"Description"}),(0,h.jsx)(he,{children:"Label color"}),(0,h.jsx)(fe,{value:d,onChange:s}),(0,h.jsx)(he,{children:"Deadline"}),(0,h.jsx)(Me,{date:p,changeDate:n=>{x(n)}}),(0,h.jsx)(ye,{type:"submit",children:(0,h.jsxs)(me,{children:[(0,h.jsx)(ve,{children:(0,h.jsx)(c.A,{width:14,height:14,fillColor:"none",strokeColor:"var(--icon-plus)",name:"icon-plus"})}),"Add"]})})]})})},Be=n=>{let{column:e}=n;const[o,t]=(0,i.useState)(!1),{_id:r,title:l}=e,c=(0,a.wA)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(an,{id:r,children:[(0,h.jsxs)(ln,{children:[(0,h.jsx)("h3",{children:l}),(0,h.jsxs)(cn,{children:[(0,h.jsx)(dn,{children:(0,h.jsx)(sn,{onClick:()=>{c((0,En.Yy)(r))},children:(0,h.jsx)("use",{href:"".concat(Sn.A,"#pencil")})})}),(0,h.jsx)(dn,{children:(0,h.jsx)(sn,{onClick:()=>{c((0,En.oD)(r))},children:(0,h.jsx)("use",{href:"".concat(Sn.A,"#trash")})})})]})]}),(0,h.jsx)(Un,{}),(0,h.jsxs)(pn,{onClick:()=>t((n=>!n)),children:[(0,h.jsx)(xn,{children:(0,h.jsx)("use",{href:"".concat(Sn.A,"#plus")})}),"Add another card"]})]}),o&&(0,h.jsx)(Se,{showModal:t})]})},Fe=()=>{const n=(0,a.d4)(O),e=(0,a.d4)($.AA),{_id:o}=e;console.log("_id :>> ",o);const t=(0,a.wA)();return(0,i.useEffect)((()=>{t((0,En.Vl)(o))}),[o,t]),(0,h.jsx)(rn,{children:n.length>0&&n.map((n=>(0,h.jsx)(Be,{column:n},n._id)))})};var Pe,Le,Re,Ye,Ie,We,$e=o(1036);const Te=s.Ay.form(Pe||(Pe=(0,d.A)(["\n  border-radius: 8px;\n  width: 100%;\n  &:hover {\n    border-color: var(--accent-icon-hover-color);\n  }\n\n  @media screen and (min-width: 1440px) {\n    input\n    {\n      width: 100%;\n    }\n  }\n"]))),qe=s.Ay.h2(Le||(Le=(0,d.A)(["\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: -0.02em;\n  color: var(--input-text-color);\n  margin-bottom: 24px;\n"]))),He=s.Ay.input(Re||(Re=(0,d.A)(["\n  width: 100%;\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  height: 49px;\n  opacity: 0.4;\n  margin-bottom: 24px;\n  color: var(--input-text-color) !important;\n  padding: 14px 18px;\n  background-color: transparent;\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),Ne=s.Ay.button(Ye||(Ye=(0,d.A)(["\n  border-radius: 8px;\n  width: 100%;\n  height: 49px;\n  background-color: var(--input-border-color);\n  color: var(--btn-text-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),Ge=s.Ay.div(Ie||(Ie=(0,d.A)(["\n  width: 64px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap:8px;\n"]))),Ve=s.Ay.div(We||(We=(0,d.A)(["\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background-color: var(--btn-text-color);\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Je=n=>{let{showModal:e}=n;const{_id:o}=(0,a.d4)($.AA);console.log("_id :>> ",o);const[t,r]=(0,i.useState)(""),l=(0,a.wA)(),d={style:{border:"2px solid #bedbb0",backgroundColor:"#1f1f1f",color:"#fff",textAlign:"center"},position:"top-center",duration:2e3};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(J.A,{width:335,height:221,onClose:()=>e(!1),children:(0,h.jsxs)(Te,{onSubmit:async n=>{n.preventDefault(),console.log(t);const r={title:t};console.log(r);try{l((0,En.Gd)({boardId:o,body:r})),(0,$e.oR)("You have successfully created a column \u2705",d),e(!1)}catch(i){return i.message}},children:[(0,h.jsx)(qe,{children:"Add column"}),(0,h.jsx)(He,{value:t,onChange:n=>{r(n.target.value)},required:!0,type:"text",name:"title",placeholder:"Titie"}),(0,h.jsx)(Ne,{type:"submit",children:(0,h.jsxs)(Ge,{children:[(0,h.jsx)(Ve,{children:(0,h.jsx)(c.A,{width:14,height:14,fillColor:"none",strokeColor:"var(--icon-plus)",name:"icon-plus"})}),"Add"]})})]})})})};var Ke,Oe,Qe;const Ue=s.Ay.button(Ke||(Ke=(0,d.A)(["\n  border-radius: 8px;\n  width: 335px;\n  height: 56px;\n  background-color: var(--btn-add-column);\n  color: var(--icon-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),Xe=s.Ay.div(Oe||(Oe=(0,d.A)(["\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background-color: var(--btn-add-column-wrap);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  // border: 1px solid red;\n  \n"]))),Ze=s.Ay.div(Qe||(Qe=(0,d.A)(["\n  // width: 64px;\n  // height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap:8px;\n"]))),no=()=>{const[n,e]=(0,i.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Ue,{type:"submit",onClick:()=>e((n=>!n)),children:(0,h.jsxs)(Ze,{children:[(0,h.jsx)(Xe,{children:(0,h.jsx)(c.A,{width:14,height:14,fillColor:"none",strokeColor:"var( --btn-add-column",name:"icon-plus"})}),"Add another column"]})}),n&&(0,h.jsx)(Je,{showModal:e})]})};var eo;const oo=s.Ay.div(eo||(eo=(0,d.A)(["\ndisplay: flex;\ngap: 18px;\n\n"]))),to=()=>(0,h.jsxs)(oo,{children:[(0,h.jsx)(Fe,{}),(0,h.jsx)(no,{})]});var ro,io=o(6277);const ao=s.Ay.div(ro||(ro=(0,d.A)(["\n  padding: 14px 20px 60px 14px;\n  background:(var--primary-bg-color);\n"]))),lo=()=>{const n=(0,a.d4)($.gp),{boardName:e}=(0,l.g)(),o=(0,a.wA)();return(0,i.useEffect)((()=>{try{if(e){const t=n.find((n=>n.title===e))._id;o((0,io.pR)(t))}o((0,io.pR)(n[0]._id))}catch(t){console.log(t.message)}}),[o,e,n]),(0,h.jsxs)(ao,{children:[(0,h.jsx)(K,{}),(0,h.jsx)(to,{})]})}},3377:(n,e,o)=>{o.d(e,{$N:()=>a,AA:()=>r,Di:()=>i,gp:()=>t});const t=n=>n.boards.boards,r=n=>n.boards.currentBoard,i=n=>n.boards.isLoading,a=n=>n.boards.oneBoard}}]);
//# sourceMappingURL=534.202bb5cc.chunk.js.map