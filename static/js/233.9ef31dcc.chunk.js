"use strict";(self.webpackChunkcode_jedi_front=self.webpackChunkcode_jedi_front||[]).push([[233],{7365:(n,e,o)=>{o.d(e,{A:()=>u});var t,r,i,l=o(5043),s=o(7950),d=o(4506),a=o(7528),c=o(7205);const p=c.Ay.div(t||(t=(0,a.A)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--primary-bg-color);\n\n  @media screen and (max-width: 375px) {\n    padding: 15px;\n  }\n"]))),x=c.Ay.div(r||(r=(0,a.A)(["\n  position: relative;\n  // width: 100%;\n  justify-content: center;\n  align-items: center;\n\n  min-height: 130px;\n  border-radius: 8px;\n  padding: 24px;\n  color: var(--primary-text-color);\n  background: var(--input-bg-color);\n  // height: ","px; /* Use $Height prop */\n  width: ","px; /* Use $Width prop */\n  // height: ",";\n  // width: ",";\n\n  @media screen and (min-width: 375px) {\n    // width: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    overflow-y: visible;\n  }\n"])),(n=>{let{$Height:e}=n;return e}),(n=>{let{$Width:e}=n;return e}),(n=>{let{$developers:e}=n;return e?"370px":"unset"}),(n=>{let{$developers:e}=n;return e?"90%":"300px"}),(n=>{let{$developers:e}=n;return e?"60%":"335px"})),h=c.Ay.button(i||(i=(0,a.A)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  background-color: transparent;\n  padding: 0;\n\n  @media screen and (min-width: 1440px) {\n    &:hover svg,\n    &:focus svg {\n      filter: drop-shadow(1px 1px 3px var(--additional-icon-color));\n    }\n  }\n"])));var g=o(579);const u=n=>{let{children:e,width:o,height:t,onClose:r,developers:i=!1}=n;const a=document.getElementById("modal-root");return(0,l.useEffect)((()=>{const n=n=>{"Escape"===n.code&&r()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}),[r]),(0,s.createPortal)((0,g.jsx)(p,{onClick:r,children:(0,g.jsxs)(x,{$developers:i,$Width:o,$Height:t,onClick:n=>n.stopPropagation(),children:[(0,g.jsx)(h,{type:"button","aria-label":"Close modal",onClick:r,children:(0,g.jsx)(d.A,{width:18,height:18,strokeColor:"var(--icon-color)",name:"close"})}),e]})}),a)}},7233:(n,e,o)=>{o.r(e),o.d(e,{default:()=>se});var t,r,i=o(3003),l=o(5043),s=o(4506),d=o(7528),a=o(7205);const c=a.Ay.button(t||(t=(0,d.A)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 14px;\n  right: 14px;\n"]))),p=(0,a.Ay)(s.A)(r||(r=(0,d.A)(["\n  width: 18px;\n  height: 18px;\n  stroke: var(--icon-color);\n  // transition: stroke 250ms linear;\n\n  &:hover > svg {\n    stroke: #559840;\n  }\n"])));var x=o(579);const h=n=>{let{onClick:e}=n;return(0,x.jsx)(c,{onClick:e,children:(0,x.jsx)(p,{width:18,height:18,fillColor:"none",strokeColor:"var(--icon-color)",name:"close"})})};var g=o(4163),u=o(6446),b=o(2195),f=o(9964),y=o(7890);const A=n=>{let{onFilterChange:e,priority:o}=n;const[t,r]=(0,l.useState)(o||"Without"),i=[{value:"Without",label:"Without priority",labelColor:"Without"===t?"#fff":"#808080",radioColor:{static:"#DCDCDC",onChecked:"#fff"}},{value:"Low",label:"Low",labelColor:"Low"===t?"#fff":"#808080",radioColor:{static:"#0000FF",onChecked:"#121212"}},{value:"Medium",label:"Medium",labelColor:"Medium"===t?"#fff":"#808080",radioColor:{static:"#FFC0CB",onChecked:"#121212"}},{value:"High",label:"High",labelColor:"High"===t?"#fff":"#DCDCDC",radioColor:{static:"#008000",onChecked:"#121212"}}];return console.log("Render RadioFilter component"),(0,x.jsx)(u.A,{sx:{display:"flex",flexDirection:"column",alignItems:"flexStart",width:"120px"},children:(0,x.jsx)(b.A,{"aria-labelledby":"radio-buttons-group-label",value:t,name:"radio-buttons-group",onChange:n=>{const o=n.target.value;r(o),e(o)},sx:{display:"flex",flexDirection:"row",gap:"8px"},children:i.map((n=>{const{value:e,label:o,labelColor:t,radioColor:r}=n;return(0,x.jsx)(f.A,{value:e,sx:{display:"flex",gap:"8px",margin:"0",height:"24px","& .MuiTypography-root":{fontFamily:"Poppins",fontSize:"12px",color:t}},control:(0,x.jsx)(y.A,{sx:{width:"14px",height:"14px",color:"transparent",backgroundColor:r.static,"&.Mui-checked":{color:r.static,backgroundColor:r.onChecked}},disableRipple:!0}),label:o},e)}))})})};var v,m,j,w,k,C;const z=a.Ay.div(v||(v=(0,d.A)(["\n  width: 300px;\n  padding: 24px;\n  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);\n  //   background: var(--bg-theme);\n  background: #151515;\n  border-radius: 8px;\n  position: relative;\n  color: var(--color);\n"]))),F=a.Ay.p(m||(m=(0,d.A)(["\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: -0.02em;\n  color: #121212;\n  margin-bottom: 14px;\n"]))),D=a.Ay.hr(j||(j=(0,d.A)(["\n  border: none;\n  height: 1px;\n  background-color:#fff;\n  margin: 0;\n  margin-bottom: 14px;\n"]))),$=a.Ay.div(w||(w=(0,d.A)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 14px;\n"]))),S=a.Ay.p(k||(k=(0,d.A)(["\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: #121212;\n"]))),L=a.Ay.button(C||(C=(0,d.A)(["\n  font-family: inherit;\n  font-size: 12px;\n  letter-spacing: -0.02em;\n  text-decoration: underline;\n  text-decoration-skip-ink: none;\n  color: #125621;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  transition: color 250ms linear;\n\n  &:hover {\n    color:#555000;\n  }\n"]))),M=n=>{let{onClose:e}=n;const o=(0,i.wA)(),[t,r]=(0,l.useState)("all");return console.log("Render Filter component"),(0,x.jsxs)(z,{children:[(0,x.jsx)(h,{onClick:e}),(0,x.jsx)(F,{children:"Filters"}),(0,x.jsx)(D,{}),(0,x.jsxs)($,{children:[(0,x.jsx)(S,{children:"Label color"}),(0,x.jsx)(L,{onClick:()=>{o((0,g.R)("all")),r("all")},children:"Show all"})]}),(0,x.jsx)(A,{onFilterChange:n=>{o((0,g.R)(n)),r(n)},priority:t})]})};var P,R,W,H=o(3377);const E=a.Ay.button(P||(P=(0,d.A)(["\n  display: flex;\n  width: 64px;\n  height: 20px;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  gap: 6px;\n  color: #321212;\n  border: none;\n  background: transparent;\n\n  &:hover {\n    stroke: #bedbb0;\n  }\n"]))),B=a.Ay.div(R||(R=(0,d.A)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  padding: 10px; \n"]))),_=a.Ay.div(W||(W=(0,d.A)(["\n  display: flex;\n  // flex-direction: column;\n  // justify-content: flex-end;\n"])));var I=o(7365);const T=()=>{const n=(0,i.d4)(H.AA),{title:e}=n,[o,t]=(0,l.useState)(!1),r=()=>{t(!o)};return(0,x.jsxs)("div",{children:[(0,x.jsx)("h4",{children:e}),(0,x.jsxs)(_,{children:[(0,x.jsx)(B,{children:(0,x.jsxs)(E,{type:"button",onClick:()=>{t(!0)},children:[(0,x.jsx)(s.A,{width:20,height:20,fillColor:"none",strokeColor:"#fff",name:"filter"}),(0,x.jsx)("p",{children:"Filter"})]})}),o&&(0,x.jsx)(I.A,{open:o,onClose:r,children:(0,x.jsx)(M,{onClose:r})})]})]})};var U,q,N,Y,G,J,K,O;const Q=a.Ay.div(U||(U=(0,d.A)(["\n  display: flex;\n  gap: 28px;\n"]))),V=a.Ay.div(q||(q=(0,d.A)(["\n  display: block;\n"]))),X=a.Ay.div(N||(N=(0,d.A)(["\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  background-color: black;\n  border-radius: 8px;\n  align-items: center;\n  width: 334px;\n  height: 56px;\n  margin-bottom: 10px;\n\n  h3 {\n    font-size: 16px;\n    font-weight: 500;\n    color: white;\n    width: 260px;\n  }\n"]))),Z=a.Ay.div(Y||(Y=(0,d.A)(["\n  display: flex;\n  gap: 8px;\n"]))),nn=a.Ay.button(G||(G=(0,d.A)([""]))),en=a.Ay.svg(J||(J=(0,d.A)(["\n  stroke: rgba(255, 255, 255, 0.5);\n  width: 16px;\n  height: 16px;\n  opacity: 50%;\n  transition: 350ms ease-in-out;\n\n  &:hover {\n    opacity: 100%;\n  }\n"]))),on=a.Ay.button(K||(K=(0,d.A)(["\n  display: flex;\n  width: 100%;\n  padding: 14px 79px;\n  background-color: var(--highPriorityColor);\n  color: black;\n  border-radius: 8px;\n  align-items: center;\n  gap: 8px;\n  transition: 350ms ease-in-out;\n\n  &:hover {\n    background-color: #b0eebe;\n  }\n"]))),tn=a.Ay.svg(O||(O=(0,d.A)(["\n  background-color: black;\n  border-radius: 8px;\n  width: 28px;\n  height: 28px;\n  stroke: white;\n  padding: 5px 7px 8px 6px;\n"])));var rn,ln,sn,dn,an,cn,pn,xn,hn,gn,un,bn,fn,yn,An,vn=o(7235);const mn=a.Ay.div(rn||(rn=(0,d.A)(["\n  display: flex;\n  min-width: 100%;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  color: white;\n"]))),jn=a.Ay.div(ln||(ln=(0,d.A)(["\n  // \u0442\u0438\u043c\u0447\u0430\u0441\u043e\u0432\u0438\u0439 \u043a\u043e\u043b\u0456\u0440\n  width: 4px;\n  min-height: 100%;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n\n  background-color: var(--highPriorityColor);\n"]))),wn=a.Ay.div(sn||(sn=(0,d.A)(["\n  background-color: #121212;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  max-width: 334px;\n  padding: 14px 24px;\n\n  h3 {\n    font-size: 14px;\n    font-weight: 600;\n    margin-bottom: 14px;\n  }\n"]))),kn=a.Ay.div(dn||(dn=(0,d.A)(["\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding-bottom: 20px;\n"]))),Cn=a.Ay.div(an||(an=(0,d.A)(["\n  display: flex;\n"]))),zn=a.Ay.div(cn||(cn=(0,d.A)(["\n  margin-right: 16px;\n\n  div {\n    display: flex;\n    gap: 4px;\n  }\n"]))),Fn=a.Ay.p(pn||(pn=(0,d.A)(["\n  font-size: 8px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n  margin-bottom: 8px;\n  margin-top: 16px;\n"]))),Dn=a.Ay.div(xn||(xn=(0,d.A)(["\n  width: 12px;\n  height: 12px;\n\n  // \u0442\u0438\u043c\u0447\u0430\u0441\u043e\u0432\u043e\n  background-color: var(--highPriorityColor);\n  border-radius: 50px;\n"]))),$n=a.Ay.p(hn||(hn=(0,d.A)(["\n  font-size: 10px;\n  font-weight: 400;\n  color: #fff;\n"]))),Sn=a.Ay.div(gn||(gn=(0,d.A)(["\n  margin-right: 116px;\n  div {\n    display: flex;\n    gap: 4px;\n  }\n"]))),Ln=a.Ay.p(un||(un=(0,d.A)(["\n  font-size: 8px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n  margin-bottom: 8px;\n  margin-top: 16px;\n"]))),Mn=a.Ay.p(bn||(bn=(0,d.A)(["\n  font-size: 10px;\n  font-weight: 400;\n  color: #fff;\n"]))),Pn=a.Ay.div(fn||(fn=(0,d.A)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 24px;\n"]))),Rn=a.Ay.button(yn||(yn=(0,d.A)([""]))),Wn=a.Ay.svg(An||(An=(0,d.A)(["\n  stroke: #fff;\n  opacity: 50%;\n  width: 16px;\n  height: 16px;\n  transition: 350ms ease-in-out;\n\n  &:hover {\n    opacity: 100%;\n  }\n"]))),Hn=()=>(0,x.jsxs)(mn,{children:[(0,x.jsx)(jn,{}),(0,x.jsxs)(wn,{children:[(0,x.jsx)("h3",{children:"Cards title"}),(0,x.jsx)(kn,{children:"Create a visually stunning and eye-catching watch dial design that embodies our brand's"}),(0,x.jsxs)(Cn,{children:[(0,x.jsxs)(zn,{children:[(0,x.jsx)(Fn,{children:"Priority"}),(0,x.jsxs)("div",{children:[(0,x.jsx)(Dn,{}),(0,x.jsx)($n,{children:"Color"})]})]}),(0,x.jsxs)(Sn,{children:[(0,x.jsx)(Ln,{children:"Deadline"}),(0,x.jsx)(Mn,{children:"00/00/0000"})]}),(0,x.jsxs)(Pn,{children:[(0,x.jsx)(Rn,{children:(0,x.jsx)(Wn,{children:(0,x.jsx)("use",{href:"".concat(vn.A,"#broken-right")})})}),(0,x.jsx)(Rn,{children:(0,x.jsx)(Wn,{children:(0,x.jsx)("use",{href:"".concat(vn.A,"#pencil")})})}),(0,x.jsx)(Rn,{children:(0,x.jsx)(Wn,{children:(0,x.jsx)("use",{href:"".concat(vn.A,"#trash")})})})]})]})]})]});var En,Bn,_n,In,Tn,Un,qn=o(3216),Nn=o(1036);const Yn=a.Ay.form(En||(En=(0,d.A)(["\n  border-radius: 8px;\n  width: 100%;\n  &:hover {\n    border-color: var(--accent-icon-hover-color);\n  }\n\n  @media screen and (min-width: 1440px) {\n    input\n    {\n      width: 100%;\n    }\n  }\n"]))),Gn=a.Ay.h2(Bn||(Bn=(0,d.A)(["\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: -0.02em;\n  color: var(--input-text-color);\n  margin-bottom: 24px;\n"]))),Jn=a.Ay.input(_n||(_n=(0,d.A)(["\n  width: 100%;\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n  height: 49px;\n  opacity: 0.4;\n  margin-bottom: 24px;\n  color: var(--input-text-color) !important;\n  padding: 14px 18px;\n  background-color: transparent;\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),Kn=a.Ay.button(In||(In=(0,d.A)(["\n  border-radius: 8px;\n  width: 100%;\n  height: 49px;\n  background-color: var(--input-border-color);\n  color: var(--btn-text-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),On=a.Ay.div(Tn||(Tn=(0,d.A)(["\n  width: 64px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap:8px;\n"]))),Qn=a.Ay.div(Un||(Un=(0,d.A)(["\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background-color: var(--btn-text-color);\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Vn=n=>{let{showModal:e}=n;const{boardId:o}=(0,qn.g)(),[t,r]=(0,l.useState)(""),i={style:{border:"2px solid #bedbb0",backgroundColor:"#1f1f1f",color:"#fff",textAlign:"center"},position:"top-center",duration:2e3};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(I.A,{width:335,height:221,onClose:()=>e(!1),children:(0,x.jsxs)(Yn,{onSubmit:async n=>{n.preventDefault(),console.log(t);const r={board:o,title:t};console.log(r);try{(0,Nn.oR)("You have successfully created a column \u2705",i),e(!1)}catch(l){return l.message}},children:[(0,x.jsx)(Gn,{children:"Add column"}),(0,x.jsx)(Jn,{value:t,onChange:n=>{r(n.target.value)},required:!0,type:"text",name:"title",placeholder:"Titie"}),(0,x.jsx)(Kn,{type:"submit",children:(0,x.jsxs)(On,{children:[(0,x.jsx)(Qn,{children:(0,x.jsx)(s.A,{width:14,height:14,fillColor:"none",strokeColor:"var(--icon-plus)",name:"icon-plus"})}),"Add"]})})]})})})};var Xn,Zn,ne;const ee=a.Ay.button(Xn||(Xn=(0,d.A)(["\n  border-radius: 8px;\n  width: 335px;\n  height: 56px;\n  background-color: var(--btn-add-column);\n  color: var(--icon-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),oe=a.Ay.div(Zn||(Zn=(0,d.A)(["\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background-color: var(--btn-add-column-wrap);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),te=a.Ay.div(ne||(ne=(0,d.A)(["\n  // width: 64px;\n  // height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap:8px;\n"]))),re=()=>{const[n,e]=(0,l.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ee,{type:"submit",onClick:()=>e((n=>!n)),children:(0,x.jsxs)(te,{children:[(0,x.jsx)(oe,{children:(0,x.jsx)(I.A,{width:14,height:14,fillColor:"none",strokeColor:"var(--btn-add-column)",name:"icon-plus"})}),"Add another column"]})}),n&&(0,x.jsx)(Vn,{showModal:e})]})},ie=()=>(0,x.jsxs)(Q,{children:[(0,x.jsxs)(V,{children:[(0,x.jsxs)(X,{children:[(0,x.jsx)("h3",{children:"Title for colum"}),(0,x.jsxs)(Z,{children:[(0,x.jsx)(nn,{children:(0,x.jsx)(en,{children:(0,x.jsx)("use",{href:"".concat(vn.A,"#pencil")})})}),(0,x.jsx)(nn,{children:(0,x.jsx)(en,{children:(0,x.jsx)("use",{href:"".concat(vn.A,"#trash")})})})]})]}),(0,x.jsx)(Hn,{}),(0,x.jsxs)(on,{children:[(0,x.jsx)(tn,{children:(0,x.jsx)("use",{href:"".concat(vn.A,"#plus")})}),"Add another card"]})]}),(0,x.jsx)(re,{})]}),le=()=>(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{children:(0,x.jsx)(ie,{children:(0,x.jsx)("div",{children:(0,x.jsx)(Hn,{})})})}),(0,x.jsx)(re,{})]}),se=()=>(0,x.jsxs)("div",{children:[(0,x.jsx)(T,{}),(0,x.jsx)(le,{})]})},3377:(n,e,o)=>{o.d(e,{$N:()=>l,AA:()=>r,Di:()=>i,gp:()=>t});const t=n=>n.boards.boards,r=n=>n.boards.currentBoard,i=n=>n.boards.isLoading,l=n=>n.boards.oneBoard}}]);
//# sourceMappingURL=233.9ef31dcc.chunk.js.map