(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(46)},24:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),u=n.n(c),o=(n(24),n(18)),l=n(3),i=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onClick},e.text))},m=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("h2",null,"Add New Contact"),r.a.createElement("div",null,"name : ",r.a.createElement("input",{value:e.value,onChange:e.onChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=function(e){var t=e.note.important?"make not important":"make important";return r.a.createElement("li",null,e.note.content,r.a.createElement(i,{onClick:e.toggleImportance,text:t}))},p=n(2),f=n.n(p),d=n(6),v=n(7),b=n.n(v),E="https://radiant-hollows-63198.herokuapp.com/api/notes",h={getAll:function(){var e=Object(d.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.a.get(E),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.a.post(E,t),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(f.a.mark(function e(t,n){var a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.a.put("".concat(E,"/").concat(t),n),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},g=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},w=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2022"))},j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),p=Object(l.a)(u,2),f=(p[0],p[1],Object(a.useState)("")),d=Object(l.a)(f,2),v=d[0],b=d[1],E=Object(a.useState)(!0),j=Object(l.a)(E,2),O=j[0],k=j[1],S=Object(a.useState)(null),C=Object(l.a)(S,2),x=C[0];C[1];Object(a.useEffect)(function(){h.getAll().then(function(e){c(e)})},[]);var y=O?n:n.filter(function(e){return e.important}),D=O?"show important":"show all";return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(g,{message:x}),r.a.createElement(i,{onClick:function(){return k(!O)},text:D}),r.a.createElement("ul",null,y.map(function(e){return r.a.createElement(s,{key:e.id,note:e,toggleImportance:function(){return function(e){var t=n.find(function(t){return t.id===e}),a=Object(o.a)({},t,{important:!t.important});h.update(e,a).then(function(t){c(n.map(function(n){return n.id!==e?n:t}))})}(e.id)}})})),r.a.createElement(m,{onSubmit:function(e){e.preventDefault();var t={content:v,date:new Date,important:Math.random()<.5};h.create(t).then(function(e){c(n.concat(e)),b("")})},value:v,onChange:function(e){b(e.target.value)}}),r.a.createElement(w,null))},O=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,47)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),c(e),u(e)})},k=document.getElementById("root");u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),k),O()}},[[19,3,2]]]);
//# sourceMappingURL=main.5813f6ce.chunk.js.map