(this["webpackJsonpdashboard-example"]=this["webpackJsonpdashboard-example"]||[]).push([[0],{350:function(e,t,c){},351:function(e,t,c){},352:function(e,t,c){},353:function(e,t,c){},354:function(e,t,c){},355:function(e,t,c){},356:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(1),s=c.n(a),i=c(31),r=c.n(i),o=c(21),d=c(11),l=function(e){var t=e.children,c=e.layout,a=e.composed,s=e.size;return a?Object(n.jsx)(d.b,Object(o.a)(Object(o.a)({},s),{},{data:j,layout:c,barCategoryGap:4,margin:{left:-20,top:20},children:t})):Object(n.jsx)(d.d,Object(o.a)(Object(o.a)({},s),{},{data:j,layout:c,barCategoryGap:4,margin:{right:40},children:t}))},j=[{diff:"+4%",value:330,change:4,last:326,color:"#2ABFD7"},{diff:"+15%",value:300,change:15,last:285,color:"#BDD74B"},{diff:"+9%",value:200,change:9,last:191,color:"#FF9933"},{diff:"-17%",value:261,change:-17,last:278,color:"#FC5151"}],b=function(e){var t=e.layout,c=e.composed,a=e.height,s=window.innerWidth>576;return Object(n.jsx)("div",{children:Object(n.jsx)(d.g,{children:Object(n.jsxs)(l,{size:{width:s?400:240,height:a},data:j,layout:t,barCategoryGap:4,composed:c,children:[Object(n.jsx)(d.i,{type:c?"category":"number",hide:!c}),Object(n.jsx)(d.j,{type:c?"number":"category",hide:!c}),Object(n.jsx)(d.h,{cursor:{fill:"transparent",stroke:"transparent"}}),Object(n.jsx)(d.a,{dataKey:"value",fill:"#e5e7e9",stackId:"stacked",children:Object(n.jsx)(d.e,{dataKey:"diff",position:c?"top":"right"})}),Object(n.jsx)(d.a,{dataKey:"change",fill:"red",stackId:"stacked",children:j.map((function(e,t){return Object(n.jsx)(d.c,{fill:e.color},"cell-".concat(t))}))}),c&&Object(n.jsx)(d.f,{type:"monotone",dataKey:"last",stroke:"#ff7300"})]})})})},h=c(359),u=c(360),x=(c(350),function(){return Object(n.jsx)(h.a,{center:[51.505,-.09],zoom:3,children:Object(n.jsx)(u.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})})}),p=(c(351),function(e){var t=e.type,c=e.icon,s=e.callback;return Object(n.jsx)(a.Fragment,{children:Object(n.jsx)("div",{className:"button button-right icon-".concat(c," btn-").concat(t),onClick:function(){return function(e){e&&e()}(s)}})})}),O=function(){return Object(n.jsxs)("div",{className:"flex flex-right",children:[Object(n.jsx)(p,{type:"secondary",icon:"download",callback:function(){return window.print()}}),Object(n.jsx)(p,{type:"secondary",icon:"print",callback:function(){return window.print()}})]})},f=(c(352),function(e){var t=e.children,c=e.value,a=e.name,s=e.difference,i=e.type;return Object(n.jsxs)("div",{className:"panel",children:[Object(n.jsx)("div",{className:"h1",children:c}),Object(n.jsxs)("div",{className:"panel-title",children:[a," ",Object(n.jsx)("span",{className:"right ".concat(i),children:s})]}),t]})}),m=c(25),y=(c(353),function(e){var t=e.icon,c=e.boxType,s=e.options,i=Object(a.useState)(!1),r=Object(m.a)(i,2),o=r[0],d=r[1],l=Object(a.useState)(""),j=Object(m.a)(l,2),b=j[0],h=j[1],u=s&&Array.isArray(s)&&s.length;return Object(n.jsxs)("div",{className:"select-wrapper flex",onClick:function(){return d(!o)},children:[u&&Object(n.jsxs)(a.Fragment,{children:[Object(n.jsxs)("span",{children:[b.length?s.find((function(e){return e.id===b})).name:s[0].name," ",Object(n.jsx)("span",{className:"icon-down-dir"})]}),Object(n.jsx)("div",{className:"select-options ".concat(o?"":"hidden"),children:s.map((function(e,t){return Object(n.jsx)("div",{className:"select-option",onClick:function(){return h(e.id)},children:e.name},t)}))})]}),Object(n.jsx)(p,{icon:t,type:c})]})}),v=(c(354),[{name:"Monthly Stats",id:"monthly"},{name:"Yearly Stats",id:"yearly"}]),g=function(){return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)("div",{className:"dashboard",children:[Object(n.jsx)("h2",{className:"dashboard-title h2",children:"Enterprise Shiny Dashboard"}),Object(n.jsxs)("div",{className:"dashboard-panels",children:[Object(n.jsx)(f,{value:"$2 674 862",name:"total profit",difference:"+4.5%",type:"increased",children:Object(n.jsx)(y,{options:v,icon:"database",boxType:"primary"})}),Object(n.jsx)(f,{value:"657",name:"active users",difference:"+8.5%",type:"increased",children:Object(n.jsx)(y,{options:v,icon:"user-o",boxType:"success"})}),Object(n.jsx)(f,{value:"$245",name:"new orders",difference:"+3.9%",type:"increased",children:Object(n.jsx)(y,{options:v,icon:"th-large",boxType:"warning"})}),Object(n.jsx)(f,{value:"12",name:"open complaints",difference:"-5.3%",type:"decreased",children:Object(n.jsx)(y,{options:v,icon:"ellipsis",boxType:"danger"})})]}),Object(n.jsxs)("div",{className:"dashboard-boxes",children:[Object(n.jsxs)("div",{className:"dashboard-column",children:[Object(n.jsxs)("div",{className:"dashboard-box",children:[Object(n.jsxs)("div",{className:"dashboard-box-title flex",children:[Object(n.jsx)("h3",{children:"Production"}),Object(n.jsx)(O,{})]}),Object(n.jsx)(b,{composed:!0,height:160})]}),Object(n.jsxs)("div",{className:"dashboard-box",children:[Object(n.jsx)("div",{className:"dashboard-box-title",children:Object(n.jsx)("h3",{children:"Summary"})}),Object(n.jsx)(b,{layout:"vertical",height:100})]})]}),Object(n.jsx)("div",{className:"dashboard-column",children:Object(n.jsxs)("div",{className:"dashboard-box",children:[Object(n.jsxs)("div",{className:"dashboard-box-title flex",children:[Object(n.jsx)("h3",{children:"sales revenue by country"}),Object(n.jsx)(O,{})]}),Object(n.jsx)(x,{})]})})]})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,361)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};c(355);r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),N()}},[[356,1,2]]]);
//# sourceMappingURL=main.75b60516.chunk.js.map