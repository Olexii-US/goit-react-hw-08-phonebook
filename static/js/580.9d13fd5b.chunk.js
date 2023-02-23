"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[580],{774:function(n,e,t){t.d(e,{OL:function(){return p},lX:function(){return u},tP:function(){return d},yt:function(){return x}});var r,o,i,a,c=t(168),s=t(6444),d=s.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 360px;\n  padding: 20px;\n  margin-bottom: 16px;\n\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.accentMain})),u=s.ZP.label(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* width: 100%; */\n  width: 300px;\n  font-size: 20px;\n"]))),x=s.ZP.input(i||(i=(0,c.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n  margin-top: 8px;\n  margin-bottom: 20px;\n\n  border: 1px solid ",";\n  border-radius: 3px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n\n  background-color: ",";\n\n  :hover,\n  :focus {\n    /* border: 1px solid ","; */\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.accentMain}),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentMain})),p=s.ZP.button(a||(a=(0,c.Z)(["\n  width: 120px;\n  padding: 4px 0;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n\n  background-color: ",";\n\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n  :hover,\n  :focus {\n    background-color: ",";\n    border: 1px solid ",";\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentBg}),(function(n){return n.theme.colors.accentBg}))},7580:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,o,i,a,c,s,d,u,x,p,l,h,f,b,m,g=t(9439),w=t(2791),v=t(9434),Z=function(n){return n.contacts.contacts.items},j=function(n){return n.contacts.contacts.isLoading},y=function(n){return n.contacts.filter},k=t(4327),C=t(8174),P=t(774),L=t(3329),z=function(){var n=(0,w.useState)(""),e=(0,g.Z)(n,2),t=e[0],r=e[1],o=(0,w.useState)(""),i=(0,g.Z)(o,2),a=i[0],c=i[1],s=(0,v.v9)(j),d=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":c(o);break;default:return}},u=(0,v.I0)(),x=(0,v.v9)(Z),p=function(n){var e=x.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}));e?C.Am.warn("".concat(e.name," is already in contacts")):u((0,k.uK)(n))};return(0,L.jsxs)(P.tP,{onSubmit:function(n){n.preventDefault(),p({name:t,number:a}),x.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))||(r(""),c(""))},autoComplete:"off",children:[(0,L.jsxs)(P.lX,{children:["Name",(0,L.jsx)(P.yt,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d})]}),(0,L.jsxs)(P.lX,{children:["Number",(0,L.jsx)(P.yt,{type:"tel",name:"number",value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d})]}),(0,L.jsx)(P.OL,{type:"submit",disabled:s,children:"Add contact"})]})},M=t(168),A=t(6444),B=A.ZP.div(r||(r=(0,M.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1200;\n"]))),E=A.ZP.div(o||(o=(0,M.Z)(["\n  background-color: ",";\n  margin: auto;\n  padding: 24px 20px;\n  /* width: 50%; */\n  box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n    0 0 2px 2px rgba(76, 198, 255, 0.8);\n  z-index: 15;\n\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n"])),(function(n){return n.theme.colors.nainLigth})),F=A.ZP.ul(i||(i=(0,M.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n\n  margin-top: 16px;\n"]))),S=A.ZP.button(a||(a=(0,M.Z)(["\n  width: 120px;\n  padding: 4px 0;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n\n  color: ",";\n  background-color: ",";\n\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n  :hover,\n  :focus {\n    color: black;\n    background-color: ",";\n    border: 1px solid ",";\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentMain}),(function(n){return n.theme.colors.accentBg}),(function(n){return n.theme.colors.accentBg})),I=function(n){var e=n.id,t=n.closeModal,r=(0,v.I0)();(0,w.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,L.jsx)(B,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,L.jsxs)(E,{children:[(0,L.jsx)("p",{children:"Are you sure you want to delete this contact?"}),(0,L.jsxs)(F,{children:[(0,L.jsx)("li",{children:(0,L.jsx)(S,{type:"button",onClick:function(){return function(n){r((0,k.GK)(n)),console.log(n),t()}(e)},children:"Yes"})}),(0,L.jsx)("li",{children:(0,L.jsx)(S,{type:"button",onClick:t,children:"No"})})]})]})})},N=A.ZP.li(c||(c=(0,M.Z)(["\n  margin-left: 12px;\n  ::marker {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.accentMain})),_=A.ZP.div(s||(s=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  /* flex-wrap: wrap; */\n\n  margin: 12px 0px;\n"]))),X=A.ZP.p(d||(d=(0,M.Z)(["\n  margin: 0;\n  max-width: 290px;\n"]))),q=A.ZP.button(u||(u=(0,M.Z)(["\n  padding: 2px 12px;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n\n  background-color: ",";\n  border: 1px solid transparent;\n  border-radius: 2px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n  :hover,\n  :focus {\n    background-color: ",";\n    border: 1px solid ",";\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentBg}),(function(n){return n.theme.colors.accentBg})),D=function(n){var e=n.name,t=n.number,r=n.id,o=(0,w.useState)(""),i=(0,g.Z)(o,2),a=i[0],c=i[1],s=(0,v.v9)(j);return(0,w.useEffect)((function(){a&&(document.body.style.overflow="hidden")}),[a]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(N,{children:(0,L.jsxs)(_,{children:[(0,L.jsxs)(X,{children:[e," : ",t]}),(0,L.jsx)(q,{type:"button",onClick:function(){return function(n){c(n)}(r)},disabled:s,children:"Delete"})]})}),a&&(0,L.jsx)(I,{id:a,closeModal:function(){c(""),document.body.style.overflow="unset"}})]})},K=t(5243),O=function(){return(0,L.jsx)("div",{style:{paddingLeft:" 20px"},children:(0,L.jsx)(K.Z1,{height:"80",width:"80",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"rgba(76, 198, 255, 0.979)",innerCircleColor:"rgba(230, 247, 255, 0.979",middleCircleColor:"rgba(76, 198, 255, 0.979)"})})},G=function(){var n=(0,v.v9)(j),e=(0,v.v9)(Z),t=(0,v.v9)(y);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("ul",{children:t?e.filter((function(n){return n.name.toLowerCase().includes(t)})).map((function(n){var e=n.name,t=n.number,r=n.id;return(0,L.jsx)(D,{name:e,number:t,id:r},r)})):e.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,L.jsx)(D,{name:e,number:t,id:r},r)}))}),n&&(0,L.jsx)(O,{})]})},J=t(3661),T=A.ZP.label(x||(x=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  font-size: 20px;\n"]))),Y=A.ZP.input(p||(p=(0,M.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n  margin-top: 8px;\n  margin-bottom: 10px;\n\n  border: 1px solid ",";\n  border-radius: 3px;\n  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),\n    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);\n\n  background-color: ",";\n\n  :hover,\n  :focus {\n    /* border: 1px solid ","; */\n    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,\n      0 0 2px 2px rgba(76, 198, 255, 0.8);\n  }\n"])),(function(n){return n.theme.colors.accentMain}),(function(n){return n.theme.colors.nainLigth}),(function(n){return n.theme.colors.accentMain})),$=function(){var n=(0,w.useState)(""),e=(0,g.Z)(n,2),t=e[0],r=e[1],o=(0,v.I0)();return(0,L.jsxs)(T,{children:["Find contacts by name",(0,L.jsx)(Y,{type:"text",name:"inputFind",value:t,onChange:function(n){r(n.target.value);var e=n.target.value.trim().toLowerCase();o((0,J.x)(e))}})]})},H=A.ZP.div(l||(l=(0,M.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Q=A.ZP.div(h||(h=(0,M.Z)(["\n  margin-right: 100px;\n"]))),R=A.ZP.h2(f||(f=(0,M.Z)(["\n  margin-bottom: 16px;\n  font-weight: 500;\n"]))),U=A.ZP.span(b||(b=(0,M.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.accentMain})),V=A.ZP.div(m||(m=(0,M.Z)(["\n  width: 360px;\n  padding: 20px;\n\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.accentMain})),W=function(){var n=(0,v.I0)();return(0,w.useEffect)((function(){n((0,k.yF)())}),[n]),(0,L.jsxs)(H,{children:[(0,L.jsxs)(Q,{children:[(0,L.jsxs)(R,{children:["Add new ",(0,L.jsx)(U,{children:"contact"})]}),(0,L.jsx)(z,{})]}),(0,L.jsxs)("div",{children:[(0,L.jsxs)(R,{children:["My ",(0,L.jsx)(U,{children:"contacts"})]}),(0,L.jsxs)(V,{children:[(0,L.jsx)($,{}),(0,L.jsx)(G,{})]})]})]})}}}]);
//# sourceMappingURL=580.9d13fd5b.chunk.js.map