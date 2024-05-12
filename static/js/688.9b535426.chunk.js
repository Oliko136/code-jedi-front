"use strict";(self.webpackChunkcode_jedi_front=self.webpackChunkcode_jedi_front||[]).push([[688],{6751:(n,e,r)=>{r.d(e,{B$:()=>v,KU:()=>y,R3:()=>k,RQ:()=>b,Rx:()=>C,VS:()=>g,nk:()=>w,pd:()=>j,rk:()=>f,tF:()=>A});var i,a,s,o,l,t,d,p,c,m,x=r(7528),h=r(7205),u=r(5475);const g=h.Ay.div(i||(i=(0,x.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  min-height: 100vh;\n  background: var(--welcomeBgColor);\n"]))),f=h.Ay.div(a||(a=(0,x.A)(["\n  padding: 24px;\n  width: calc(100% - 40px);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  background-color: var(--bgColorAuth);\n  border-radius: 8px;\n\n  @media screen and (min-width: 375px) {\n    width: 335px;\n    height: 363px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 424px;\n    height: 395px;\n    padding: 40px;\n  }\n"]))),v=h.Ay.ul(s||(s=(0,x.A)(["\n  display: flex;\n  gap: 14px;\n  margin-bottom: 26px;\n"]))),w=(0,h.Ay)(u.k2)(o||(o=(0,x.A)(["\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 18px;\n  font-weight: 500;\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: #ffffff;\n  }\n\n  &.active {\n    color: #ffffff;\n  }\n"]))),b=h.Ay.form(l||(l=(0,x.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  label {\n    position: relative;\n  }\n"]))),j=h.Ay.input(t||(t=(0,x.A)(["\n  width: 100%;\n  padding: 14px 18px;\n  background: transparent;\n  border: 1px solid var(--inputBorderFocus);\n  border-radius: 8px;\n  color: #ffffff;\n  opacity: 0.4;\n  transition: opacity 0.3s ease;\n  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);\n background: var(--inputBgColor);\n font-weight: 400;\n font-size: 14px;\nletter-spacing: -0.02em;\n\n  &:focus {\n    opacity: 1;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n  \n"]))),y=h.Ay.div(d||(d=(0,x.A)(["\n  position: relative;\n"]))),A=h.Ay.button(p||(p=(0,x.A)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-50%, 50%);\n  opacity: 0.4;\n  background-color: transparent;\n  cursor: pointer;\n  \n"]))),k=h.Ay.button(c||(c=(0,x.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 0;\n  font-weight: 500;\n  background: var(--inputBorderFocus);\n  border-radius: 8px;\n  color: var(--buttonColor);\n  transition: background 0.3s ease;\n\n  margin-top: 10px;\n\n  &:hover {\n    background: #9dc888;\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n"]))),C=h.Ay.span(m||(m=(0,x.A)(["\n  position: absolute;\n  left: 0;\n  bottom: -14px;\n  font-size: 10px;\n  color: #00de00;\n"])))},5688:(n,e,r)=>{r.r(e),r.d(e,{default:()=>b});var i=r(3216),a=r(5043),s=r(3003),o=r(1299),l=r(899);const t=l.Ik().shape({email:l.Yj().matches(/^[^@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,"Invalid email format").required("Email is required"),password:l.Yj().min(8,"Password must be at least 8 characters").max(64,"Maximum password length is 64 symbols").matches(/^[\S]+$/,"Invalid password format").required("Password is required")});var d,p=r(6751),c=r(7528);const m=r(7205).Ay.div(d||(d=(0,c.A)(["\n  padding: 24px;\n  width: calc(100% - 40px);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  background-color: var(--bgColorAuth);\n  border-radius: 8px;\n\n  @media screen and (min-width: 375px) {\n    width: 335px;\n    height: 300px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 424px;\n    height: 332px;\n    padding: 40px;\n  }\n"])));var x=r(4506),h=r(4858),u=r(8403),g=r(579);const f=()=>{var n,e;const[r,i]=(0,a.useState)(!1),l=(0,s.wA)(),{register:d,handleSubmit:c,reset:f,formState:{errors:v,isValid:w}}=(0,h.mN)({initialValues:{name:"",email:"",password:""},mode:"onBlur",resolver:(0,u.t)(t)});return(0,g.jsx)(p.VS,{children:(0,g.jsxs)(m,{children:[(0,g.jsxs)(p.B$,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(p.nk,{to:"/auth/register",children:"Registration"})}),(0,g.jsx)("li",{children:(0,g.jsx)(p.nk,{to:"/auth/login",children:"Log In"})})]}),(0,g.jsxs)(p.RQ,{onSubmit:c((async n=>{const e={email:n.email,password:n.password};await t.isValid(e)&&(l((0,o.E8)({...e})),f())})),autoComplete:"off",children:[(0,g.jsxs)("label",{children:[(0,g.jsx)(p.pd,{...d("email"),name:"email",placeholder:"Enter your email",type:"email"}),(null===v||void 0===v?void 0:v.email)&&(0,g.jsx)(p.Rx,{children:(null===v||void 0===v||null===(n=v.email)||void 0===n?void 0:n.message)||"Errors!"})]}),(0,g.jsx)("label",{children:(0,g.jsxs)(p.KU,{children:[(0,g.jsx)(p.pd,{...d("password"),name:"password",placeholder:"Confirm a password",type:r?"text":"password"}),(null===v||void 0===v?void 0:v.password)&&(0,g.jsx)(p.Rx,{children:(null===v||void 0===v||null===(e=v.password)||void 0===e?void 0:e.message)||"Errors!"}),(0,g.jsx)(p.tF,{type:"button",onClick:()=>{i(!r)},children:(0,g.jsx)(x.A,{width:20,height:20,fillColor:"none",strokeColor:"#fff",name:"eye"})})]})}),(0,g.jsx)(p.R3,{type:"submit",disabled:!w,children:"Log In Now"})]})]})})};var v=r(2425);const w=()=>{var n,e,r;const[i,l]=(0,a.useState)(!1),t=(0,s.wA)(),{register:d,handleSubmit:c,reset:m,formState:{errors:f,isValid:w}}=(0,h.mN)({initialValues:{name:"",email:"",password:""},mode:"onBlur",resolver:(0,u.t)(v.A)});return(0,g.jsx)(p.VS,{children:(0,g.jsxs)(p.rk,{children:[(0,g.jsxs)(p.B$,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(p.nk,{to:"/auth/register",children:"Registration"})}),(0,g.jsx)("li",{children:(0,g.jsx)(p.nk,{to:"/auth/login",children:"Log In"})})]}),(0,g.jsxs)(p.RQ,{onSubmit:c((async n=>{const e={name:n.name,email:n.email,password:n.password};await v.A.isValid(e)&&(t((0,o.C8)({...e})),m())})),autoComplete:"off",children:[(0,g.jsxs)("label",{children:[(0,g.jsx)(p.pd,{...d("name"),name:"name",placeholder:"Enter your name"}),(null===f||void 0===f?void 0:f.name)&&(0,g.jsx)(p.Rx,{children:(null===f||void 0===f||null===(n=f.name)||void 0===n?void 0:n.message)||"Errors!"})]}),(0,g.jsxs)("label",{children:[(0,g.jsx)(p.pd,{...d("email"),name:"email",placeholder:"Enter your email",type:"email"}),(null===f||void 0===f?void 0:f.email)&&(0,g.jsx)(p.Rx,{children:(null===f||void 0===f||null===(e=f.email)||void 0===e?void 0:e.message)||"Errors!"})]}),(0,g.jsx)("label",{children:(0,g.jsxs)(p.KU,{children:[(0,g.jsx)(p.pd,{...d("password"),name:"password",placeholder:"Create a password",type:i?"text":"password"}),(null===f||void 0===f?void 0:f.password)&&(0,g.jsx)(p.Rx,{children:(null===f||void 0===f||null===(r=f.password)||void 0===r?void 0:r.message)||"Errors!"}),(0,g.jsx)(p.tF,{type:"button",onClick:()=>{l(!i)},children:(0,g.jsx)(x.A,{width:20,height:20,fillColor:"none",strokeColor:"#fff",name:"eye"})})]})}),(0,g.jsx)(p.R3,{type:"submit",disabled:!w,children:"Register Now"})]})]})})},b=()=>{const{id:n}=(0,i.g)();return(0,g.jsx)(g.Fragment,{children:"register"===n?(0,g.jsx)(w,{}):(0,g.jsx)(f,{})})}},2425:(n,e,r)=>{r.d(e,{A:()=>a});var i=r(899);const a=i.Ik().shape({name:i.Yj().min(2,"Name must be at least 2 characters").max(32,"Maximum name length is 32 symbols").required("Name is required"),email:i.Yj().matches(/^[^@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,"Invalid email format").required("Email is required"),password:i.Yj().min(8,"Password must be at least 8 characters").max(64,"Maximum password length is 64 symbols").matches(/^[\S]+$/,"Invalid password format").required("Password is required")})}}]);
//# sourceMappingURL=688.9b535426.chunk.js.map