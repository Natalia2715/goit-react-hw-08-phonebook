"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[188],{1188:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,a,i=t(5048),s=t(6895),o=t(885),c=t(5218),d=t(41),l=t(3661),u=t(2791),x=t(7247),p=t(3400),f=t(4852),m=t(6259),h=t(168),Z=t(7691),j=Z.ZP.p(r||(r=(0,h.Z)(["\n  font-size: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),g=Z.ZP.span(a||(a=(0,h.Z)(["\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),v=t(3329);function b(n){var e=n.item,t=e.id,r=e.name,a=e.number,i=(0,l.Nt)(),s=(0,o.Z)(i,2),h=s[0],Z=s[1],b=Z.isLoading,w=Z.isSuccess;return(0,u.useEffect)((function(){w&&c.ZP.success("Contact is deleted!")}),[w]),(0,v.jsxs)(f.ZP,{secondaryAction:(0,v.jsx)(p.Z,{type:"button",disabled:b,onClick:function(){h(t)},children:b?(0,v.jsx)(d.Z,{size:12}):(0,v.jsx)(x.Z,{})}),children:[(0,v.jsx)(m.Z,{primary:(0,v.jsxs)(j,{children:[r," "]}),secondary:(0,v.jsx)(g,{children:a}),sx:{fontSize:"2rem"}}),(0,v.jsx)(c.x7,{})]})}var w=t(493);function C(){var n=(0,l.Jx)(),e=n.data,t=n.isLoading,r=n.error,a=(0,i.v9)(s.B8),o=function(){if(e)return e.filter((function(n){return n.name.toLowerCase().includes(a.toLowerCase())}))}();return(0,v.jsxs)(v.Fragment,{children:[t&&(0,v.jsx)(d.Z,{}),e&&(0,v.jsx)(w.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:0!==o.length?o.map((function(n){return(0,v.jsx)(b,{item:n},n.id)})):(0,v.jsxs)("li",{children:[" Contact ",a," not found "]})}),r&&(0,v.jsx)("p",{children:"Something went wrong!"})]})}var y=t(2477),P=t(3466),z=t(9145);function k(){var n=(0,i.v9)(s.B8),e=(0,i.I0)();return(0,v.jsx)("div",{children:(0,v.jsx)(y.Z,{value:n,onChange:function(n){e((0,s.MI)(n.target.value))},label:"Find contacts by name",variant:"filled",sx:{width:400},InputProps:{startAdornment:(0,v.jsx)(P.Z,{position:"start",children:(0,v.jsx)(z.Z,{})})}})})}var A,S,L,E,F,B=t(1413),M=Z.ZP.div(A||(A=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),N=Z.ZP.form(S||(S=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 300px;\n  padding: 20px;\n  margin-left: 20px;\n"]))),T=Z.ZP.label(L||(L=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  font-size: 20px;\n  font-weight: 700;\n"]))),_=Z.ZP.button(E||(E=(0,h.Z)(["\n  width: 120px;\n  padding: 10px 15px;\n  background-image: linear-gradient(\n    to right,\n    rgba(58, 159, 241, 0.551) 35%,\n    rgba(0, 255, 208, 0.551)\n  );\n  border-radius: 4px;\n  border-color: transparent;\n  cursor: pointer;\n  transition: transform 250ms linear;\n  &:hover {\n    transform: scale(0.8);\n  }\n"]))),I=Z.ZP.input(F||(F=(0,h.Z)(["\n  padding: 8px;\n  font-size: 16px;\n  &:focus {\n    outline: none;\n    border-color: rgb(33, 33, 243);\n  }\n"])));function J(n){var e=n.onClose,t=(0,u.useState)(""),r=(0,o.Z)(t,2),a=r[0],i=r[1],s=(0,u.useState)(""),x=(0,o.Z)(s,2),p=x[0],f=x[1],m=(0,l.Lr)(),h=(0,o.Z)(m,2),Z=h[0],j=h[1],g=j.isLoading,b=j.isSuccess,w=(0,l.Jx)().data;(0,u.useEffect)((function(){b&&(c.ZP.success("Contact is added!",{id:"success"}),i(""),f(""),e())}),[b,e]);var C=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":i(r);break;case"number":f(r);break;default:return}};return(0,v.jsxs)(N,{onSubmit:function(n){n.preventDefault(),function(n,e){var t={name:n,number:e},r=[];if(w.map((function(n){return r.push(n.name.toLowerCase())})),r.includes(t.name.toLowerCase()))return(0,c.ZP)("This contact already exists!");Z(t)}(a,p)},children:[(0,v.jsxs)(T,{children:["Name",(0,v.jsx)(I,{onChange:C,type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)(T,{children:["Number",(0,v.jsx)(I,{onChange:C,type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)(_,{type:"submit",disabled:g,children:g?(0,v.jsx)(d.Z,{}):"Add contact"}),(0,v.jsx)("div",{children:(0,v.jsx)(c.x7,{})})]})}var q,O,R=t(5289),Y=t(5201),D=t(5931),W=t(890),$=t(9617),G=t(1486),H=(0,u.forwardRef)((function(n,e){return(0,v.jsx)(D.Z,(0,B.Z)((0,B.Z)({direction:"up",ref:e},n),{},{sx:{overflowY:"hidden"}}))}));function K(){var n=(0,u.useState)(!1),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(null),i=(0,o.Z)(a,2),s=i[0],c=i[1],d=function(){r(!1)},l=Boolean(s);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(p.Z,{variant:"outlined",onClick:function(){r(!0)},sx:{padding:"4px"},children:[(0,v.jsx)(W.Z,{"aria-owns":t?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(n){c(n.currentTarget)},onMouseLeave:function(){c(null)},children:(0,v.jsx)(G.Z,{color:"primary",sx:{fontSize:80}})}),(0,v.jsx)($.ZP,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:l,anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},disableRestoreFocus:!0,children:(0,v.jsx)(W.Z,{sx:{p:1},children:"Add new Contact"})})]}),(0,v.jsx)(M,{children:(0,v.jsxs)(R.Z,{open:t,TransitionComponent:H,onClose:d,sx:{overflowY:"hidden"},"aria-describedby":"alert-dialog-slide-description",children:[(0,v.jsx)(Y.Z,{children:"AddContact"}),(0,v.jsx)(J,{onClose:d})]})})]})}var Q=Z.ZP.main(q||(q=(0,h.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n"]))),U=Z.ZP.div(O||(O=(0,h.Z)(["\n  margin-right: 30px;\n"])));function V(){return(0,v.jsxs)(Q,{children:[(0,v.jsxs)(U,{children:[(0,v.jsx)(k,{}),(0,v.jsx)(C,{})]}),(0,v.jsx)(K,{})]})}}}]);
//# sourceMappingURL=188.90c578e2.chunk.js.map