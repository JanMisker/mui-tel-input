"use strict";(self.webpackChunkmui_tel_input=self.webpackChunkmui_tel_input||[]).push([[888],{7356:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(5893),r=n(1151);const i={},a="React Hook Form",s={unversionedId:"react-hook-form",id:"react-hook-form",title:"React Hook Form",description:"Here an example if you want to plug MuiTelInput to your form using React Hook Form.",source:"@site/docs/react-hook-form.md",sourceDirName:".",slug:"/react-hook-form",permalink:"/mui-tel-input/docs/react-hook-form",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playground",permalink:"/mui-tel-input/docs/playground"}},c={},l=[];function u(t){const e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre",img:"img"},(0,r.ah)(),t.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"react-hook-form",children:"React Hook Form"}),"\n",(0,o.jsxs)(e.p,{children:["Here an example if you want to plug ",(0,o.jsx)(e.code,{children:"MuiTelInput"})," to your form using ",(0,o.jsx)(e.a,{href:"https://react-hook-form.com/",children:"React Hook Form"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'import React from "react";\nimport ReactDOM from "react-dom";\nimport Button from "@mui/material/Button";\nimport { MuiTelInput, matchIsValidTel } from "mui-tel-input";\nimport { Controller, useForm } from "react-hook-form";\n\nconst App = () => {\n  const { control, handleSubmit } = useForm({\n    defaultValues: {\n      tel: ""\n    }\n  });\n\n  const onSubmit = (data) => {\n    alert(JSON.stringify(data));\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <Controller\n        name="tel"\n        control={control}\n        rules={{ validate: matchIsValidTel }}\n        render={({ field, fieldState }) => (\n          <MuiTelInput\n            {...field}\n            onlyCountries={["FR"]}\n            helperText={fieldState.invalid ? "Tel is invalid" : ""}\n            error={fieldState.invalid}\n          />\n        )}\n      />\n     <div>\n        <Button type="submit" variant="contained" sx={{ mt: 2 }}>\n          Submit\n        </Button>\n      </div>\n    </form>\n  )\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://codesandbox.io/s/react-hook-form-with-mui-tel-input-o530m7?fontsize=14&hidenavigation=1&theme=dark",children:(0,o.jsx)(e.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit on CodeSandbox"})})})]})}const m=function(t={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),t.components);return e?(0,o.jsx)(e,Object.assign({},t,{children:(0,o.jsx)(u,t)})):u(t)}},1151:(t,e,n)=>{n.d(e,{Zo:()=>s,ah:()=>i});var o=n(7294);const r=o.createContext({});function i(t){const e=o.useContext(r);return o.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const a={};function s({components:t,children:e,disableParentContext:n}){let s;return s=n?"function"==typeof t?t({}):t||a:i(t),o.createElement(r.Provider,{value:s},e)}}}]);