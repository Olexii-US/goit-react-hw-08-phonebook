"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[554],{774:function(n,e,t){t.d(e,{OL:function(){return p},lX:function(){return l},tP:function(){return d},yt:function(){return u}});var r,o,a,i,c=t(168),s=t(6444),d=s.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 360px;\n  padding: 20px;\n  margin-bottom: 16px;\n\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.accentMain})),l=s.ZP.label(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* width: 100%; */\n  width: 300px;\n  font-size: 20px;\n"]))),u=s.ZP.input(a||(a=(0,c.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n  margin-top: 8px;\n  margin-bottom: 20px;\n\n  border: 1px solid ",";\n  border-radius: 3px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n\n  background-color: ",";\n\n  :hover,\n  :focus {\n    /* border: 1px solid ","; */\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.accentMain}),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentMain})),p=s.ZP.button(i||(i=(0,c.Z)(["\n  width: 120px;\n  padding: 4px 0;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n\n  background-color: ",";\n\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n  :hover,\n  :focus {\n    background-color: ",";\n    border: 1px solid ",";\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentBg}),(function(n){return n.theme.colors.accentBg}))},9554:function(n,e,t){t.r(e),t.d(e,{default:function(){return sn}});var r,o,a,i,c,s,d,l,u,p,x,h,b,m,f,g,w,v,Z,j=t(9439),y=t(2791),k=t(9434),C=function(n){return n.contacts.contacts.items},P=function(n){return n.contacts.contacts.isLoading},L=function(n){return n.contacts.filter},z=t(4327),M=t(8174),A=t(774),S=t(3329),B=function(){var n=(0,y.useState)(""),e=(0,j.Z)(n,2),t=e[0],r=e[1],o=(0,y.useState)(""),a=(0,j.Z)(o,2),i=a[0],c=a[1],s=(0,k.v9)(P),d=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":c(o);break;default:return}},l=(0,k.I0)(),u=(0,k.v9)(C),p=function(n){var e=u.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}));e?M.Am.warn("".concat(e.name," is already in contacts")):l((0,z.uK)(n))};return(0,S.jsxs)(A.tP,{onSubmit:function(n){n.preventDefault(),p({name:t,number:i}),u.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))||(r(""),c(""))},autoComplete:"off",children:[(0,S.jsxs)(A.lX,{children:["Name",(0,S.jsx)(A.yt,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d})]}),(0,S.jsxs)(A.lX,{children:["Number",(0,S.jsx)(A.yt,{type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d})]}),(0,S.jsx)(A.OL,{type:"submit",disabled:s,children:"Add contact"})]})},E=t(168),F=t(6444),N=(F.ZP.div(r||(r=(0,E.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1200;\n"]))),F.ZP.div(o||(o=(0,E.Z)(["\n  background-color: ",";\n  margin: auto;\n  padding: 24px 20px;\n  /* width: 50%; */\n  box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n    0 0 2px 2px rgba(76, 198, 255, 0.8);\n  z-index: 15;\n\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n"])),(function(n){return n.theme.colors.nainLigth})),F.ZP.ul(a||(a=(0,E.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n\n  margin-top: 16px;\n"])))),q=F.ZP.button(i||(i=(0,E.Z)(["\n  width: 120px;\n  padding: 4px 0;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n\n  color: ",";\n  background-color: ",";\n\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n  :hover,\n  :focus {\n    color: black;\n    background-color: ",";\n    border: 1px solid ",";\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentMain}),(function(n){return n.theme.colors.accentBg}),(function(n){return n.theme.colors.accentBg})),I=function(n){var e=n.id,t=n.closeModal,r=(0,k.I0)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("p",{children:"Are you sure you want to delete this contact?"}),(0,S.jsxs)(N,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(q,{type:"button",onClick:function(){return function(n){r((0,z.GK)(n)),t()}(e)},children:"Yes"})}),(0,S.jsx)("li",{children:(0,S.jsx)(q,{type:"button",onClick:t,children:"No"})})]})]})},X=function(n){var e=n.id,t=n.closeModal,r=(0,k.v9)(C).find((function(n){return n.id===e})),o=r.name,a=r.number,i=(0,y.useState)(o),c=(0,j.Z)(i,2),s=c[0],d=c[1],l=(0,y.useState)(a),u=(0,j.Z)(l,2),p=u[0],x=u[1],h=(0,k.v9)(P),b=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":d(r);break;case"number":x(r);break;default:return}},m=(0,k.I0)(),f={id:e,name:s,number:p};return(0,S.jsxs)(A.tP,{onSubmit:function(n){n.preventDefault(),m((0,z.mP)(f)),t()},autoComplete:"off",children:[(0,S.jsxs)(A.lX,{children:["Name",(0,S.jsx)(A.yt,{type:"text",name:"name",value:s,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b})]}),(0,S.jsxs)(A.lX,{children:["Number",(0,S.jsx)(A.yt,{type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:b})]}),(0,S.jsx)(A.OL,{type:"submit",disabled:h,children:"Edit contact"}),(0,S.jsx)(A.OL,{type:"submit",disabled:h,onClick:t,children:"Cancel"})]})},O=F.ZP.li(c||(c=(0,E.Z)(["\n  margin-left: 12px;\n  ::marker {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.accentMain})),_=F.ZP.div(s||(s=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  /* flex-wrap: wrap; */\n\n  margin: 12px 0px;\n"]))),D=F.ZP.p(d||(d=(0,E.Z)(["\n  margin: 0;\n  max-width: 290px;\n"]))),J=F.ZP.button(l||(l=(0,E.Z)(["\n  padding: 2px 12px;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n\n  background-color: ",";\n  border: 1px solid transparent;\n  border-radius: 2px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n  :hover,\n  :focus {\n    background-color: ",";\n    border: 1px solid ",";\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentBg}),(function(n){return n.theme.colors.accentBg})),K=t(4164),$=F.ZP.div(u||(u=(0,E.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1200;\n"]))),G=F.ZP.div(p||(p=(0,E.Z)(["\n  background-color: ",";\n  margin: auto;\n  padding: 24px 20px;\n  /* width: 50%; */\n  box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n    0 0 2px 2px rgba(76, 198, 255, 0.8);\n  z-index: 15;\n\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n"])),(function(n){return n.theme.colors.nainLigth})),T=(F.ZP.ul(x||(x=(0,E.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n\n  margin-top: 16px;\n"]))),F.ZP.button(h||(h=(0,E.Z)(["\n  width: 120px;\n  padding: 4px 0;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n\n  color: ",";\n  background-color: ",";\n\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n  :hover,\n  :focus {\n    color: black;\n    background-color: ",";\n    border: 1px solid ",";\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentMain}),(function(n){return n.theme.colors.accentBg}),(function(n){return n.theme.colors.accentBg})),document.querySelector("#modal-root")),Y=function(n){var e=n.closeModal,t=n.children;(0,y.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,K.createPortal)((0,S.jsx)($,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,S.jsx)(G,{children:t})}),T)},H=function(n){var e=n.name,t=n.number,r=n.id,o=(0,y.useState)(""),a=(0,j.Z)(o,2),i=a[0],c=a[1],s=(0,y.useState)(null),d=(0,j.Z)(s,2),l=d[0],u=d[1],p=(0,k.v9)(P),x=function(){c(""),u(null),document.body.style.overflow="unset"};(0,y.useEffect)((function(){i&&(document.body.style.overflow="hidden")}),[i]);var h=function(n){u(n.target.name),c(r)};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(O,{children:(0,S.jsxs)(_,{children:[(0,S.jsxs)(D,{children:[e," : ",t]}),(0,S.jsx)(J,{type:"button",onClick:h,disabled:p,name:"edit",children:"Edit"}),(0,S.jsx)(J,{type:"button",onClick:h,disabled:p,name:"delete",children:"Delete"})]})}),i&&(0,S.jsx)(Y,{closeModal:x,children:"edit"===l?(0,S.jsx)(X,{id:i,closeModal:x}):(0,S.jsx)(I,{id:i,closeModal:x})})]})},Q=t(5243),R=function(){return(0,S.jsx)("div",{style:{paddingLeft:" 20px"},children:(0,S.jsx)(Q.Z1,{height:"80",width:"80",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"rgba(76, 198, 255, 0.979)",innerCircleColor:"rgba(230, 247, 255, 0.979",middleCircleColor:"rgba(76, 198, 255, 0.979)"})})},U=function(){var n=(0,k.v9)(P),e=(0,k.v9)(C),t=(0,k.v9)(L);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("ul",{children:t?e.filter((function(n){return n.name.toLowerCase().includes(t)})).map((function(n){var e=n.name,t=n.number,r=n.id;return(0,S.jsx)(H,{name:e,number:t,id:r},r)})):e.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,S.jsx)(H,{name:e,number:t,id:r},r)}))}),n&&(0,S.jsx)(R,{})]})},V=t(3661),W=F.ZP.label(b||(b=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  font-size: 20px;\n"]))),nn=F.ZP.input(m||(m=(0,E.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n  margin-top: 8px;\n  margin-bottom: 10px;\n\n  border: 1px solid ",";\n  border-radius: 3px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n\n  background-color: ",";\n\n  :hover,\n  :focus {\n    /* border: 1px solid ","; */\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.accentMain}),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentMain})),en=function(){var n=(0,y.useState)(""),e=(0,j.Z)(n,2),t=e[0],r=e[1],o=(0,k.I0)();return(0,S.jsxs)(W,{children:["Find contacts by name",(0,S.jsx)(nn,{type:"text",name:"inputFind",value:t,onChange:function(n){r(n.target.value);var e=n.target.value.trim().toLowerCase();o((0,V.x)(e))}})]})},tn=F.ZP.div(f||(f=(0,E.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),rn=F.ZP.div(g||(g=(0,E.Z)(["\n  margin-right: 100px;\n"]))),on=F.ZP.h2(w||(w=(0,E.Z)(["\n  margin-bottom: 16px;\n  font-weight: 500;\n"]))),an=F.ZP.span(v||(v=(0,E.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.accentMain})),cn=F.ZP.div(Z||(Z=(0,E.Z)(["\n  width: 360px;\n  padding: 20px;\n\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.accentMain})),sn=function(){var n=(0,k.I0)();return(0,y.useEffect)((function(){n((0,z.yF)())}),[n]),(0,S.jsxs)(tn,{children:[(0,S.jsxs)(rn,{children:[(0,S.jsxs)(on,{children:["Add new ",(0,S.jsx)(an,{children:"contact"})]}),(0,S.jsx)(B,{})]}),(0,S.jsxs)("div",{children:[(0,S.jsxs)(on,{children:["My ",(0,S.jsx)(an,{children:"contacts"})]}),(0,S.jsxs)(cn,{children:[(0,S.jsx)(en,{}),(0,S.jsx)(U,{})]})]})]})}}}]);
//# sourceMappingURL=554.81ea416a.chunk.js.map