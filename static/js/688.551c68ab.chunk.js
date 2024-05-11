"use strict";(self.webpackChunkcode_jedi_front=self.webpackChunkcode_jedi_front||[]).push([[688],{5688:(e,s,i)=>{i.r(s),i.d(s,{default:()=>f});var r=i(3216),l=i(5043),n=i(3003),a=i(1299),d=i(899);const o=d.Ik().shape({email:d.Yj().matches(/^[^@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,"Invalid email format").required("Email is required"),password:d.Yj().min(8,"Password must be at least 8 characters").max(64,"Maximum password length is 64 symbols").matches(/^[\S]+$/,"Invalid password format").required("Password is required")});var t,m=i(6751),c=i(7528);const h=i(7205).Ay.div(t||(t=(0,c.A)(["\n  padding: 24px;\n  width: calc(100% - 40px);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  background-color: var(--bgColorAuth);\n  border-radius: 8px;\n\n  @media screen and (min-width: 375px) {\n    width: 335px;\n    height: 300px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 424px;\n    height: 332px;\n    padding: 40px;\n  }\n"])));var x=i(4506),p=i(4858),u=i(8403),j=i(579);const w=()=>{var e,s;const[i,r]=(0,l.useState)(!1),d=(0,n.wA)(),{register:t,handleSubmit:c,reset:w,formState:{errors:v,isValid:g}}=(0,p.mN)({initialValues:{name:"",email:"",password:""},mode:"onBlur",resolver:(0,u.t)(o)});return(0,j.jsx)(m.VS,{children:(0,j.jsxs)(h,{children:[(0,j.jsxs)(m.B$,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(m.nk,{to:"/auth/register",children:"Registration"})}),(0,j.jsx)("li",{children:(0,j.jsx)(m.nk,{to:"/auth/login",children:"Log In"})})]}),(0,j.jsxs)(m.RQ,{onSubmit:c((async e=>{const s={email:e.email,password:e.password};await o.isValid(s)&&(d((0,a.E8)({...s})),w())})),autoComplete:"off",children:[(0,j.jsxs)("label",{children:[(0,j.jsx)(m.pd,{...t("email"),name:"email",placeholder:"Enter your email",type:"email"}),(null===v||void 0===v?void 0:v.email)&&(0,j.jsx)(m.Rx,{children:(null===v||void 0===v||null===(e=v.email)||void 0===e?void 0:e.message)||"Errors!"})]}),(0,j.jsx)("label",{children:(0,j.jsxs)(m.KU,{children:[(0,j.jsx)(m.pd,{...t("password"),name:"password",placeholder:"Confirm a password",type:i?"text":"password"}),(null===v||void 0===v?void 0:v.password)&&(0,j.jsx)(m.Rx,{children:(null===v||void 0===v||null===(s=v.password)||void 0===s?void 0:s.message)||"Errors!"}),(0,j.jsx)(m.tF,{type:"button",onClick:()=>{r(!i)},children:(0,j.jsx)(x.A,{width:20,height:20,fillColor:"none",strokeColor:"#fff",name:"eye"})})]})}),(0,j.jsx)(m.R3,{type:"submit",disabled:!g,children:"Log In Now"})]})]})})};var v=i(2425);const g=()=>{var e,s,i;const[r,d]=(0,l.useState)(!1),o=(0,n.wA)(),{register:t,handleSubmit:c,reset:h,formState:{errors:w,isValid:g}}=(0,p.mN)({initialValues:{name:"",email:"",password:""},mode:"onBlur",resolver:(0,u.t)(v.A)});return(0,j.jsx)(m.VS,{children:(0,j.jsxs)(m.rk,{children:[(0,j.jsxs)(m.B$,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(m.nk,{to:"/auth/register",children:"Registration"})}),(0,j.jsx)("li",{children:(0,j.jsx)(m.nk,{to:"/auth/login",children:"Log In"})})]}),(0,j.jsxs)(m.RQ,{onSubmit:c((async e=>{const s={name:e.name,email:e.email,password:e.password};await v.A.isValid(s)&&(o((0,a.C8)({...s})),h())})),autoComplete:"off",children:[(0,j.jsxs)("label",{children:[(0,j.jsx)(m.pd,{...t("name"),name:"name",placeholder:"Enter your name"}),(null===w||void 0===w?void 0:w.name)&&(0,j.jsx)(m.Rx,{children:(null===w||void 0===w||null===(e=w.name)||void 0===e?void 0:e.message)||"Errors!"})]}),(0,j.jsxs)("label",{children:[(0,j.jsx)(m.pd,{...t("email"),name:"email",placeholder:"Enter your email",type:"email"}),(null===w||void 0===w?void 0:w.email)&&(0,j.jsx)(m.Rx,{children:(null===w||void 0===w||null===(s=w.email)||void 0===s?void 0:s.message)||"Errors!"})]}),(0,j.jsx)("label",{children:(0,j.jsxs)(m.KU,{children:[(0,j.jsx)(m.pd,{...t("password"),name:"password",placeholder:"Create a password",type:r?"text":"password"}),(null===w||void 0===w?void 0:w.password)&&(0,j.jsx)(m.Rx,{children:(null===w||void 0===w||null===(i=w.password)||void 0===i?void 0:i.message)||"Errors!"}),(0,j.jsx)(m.tF,{type:"button",onClick:()=>{d(!r)},children:(0,j.jsx)(x.A,{width:20,height:20,fillColor:"none",strokeColor:"#fff",name:"eye"})})]})}),(0,j.jsx)(m.R3,{type:"submit",disabled:!g,children:"Register Now"})]})]})})},f=()=>{const{id:e}=(0,r.g)();return(0,j.jsx)(j.Fragment,{children:"register"===e?(0,j.jsx)(g,{}):(0,j.jsx)(w,{})})}}}]);
//# sourceMappingURL=688.551c68ab.chunk.js.map