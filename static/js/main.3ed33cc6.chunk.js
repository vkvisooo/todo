(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var A=a(1),o=a(0),n=a.n(o),c=a(7),l=a.n(c),r=n.a.createContext({todoListData:{Meetings:["Meeting 1","Meeting 2","Meeting 3","Meeting 4"],Project_Queries:["Query 1","Query 2","Query 3","Query 4"]},todoTypeList:["Meetings","Project_Queries"]}),s=a(3),i=a(5),m=a(2),d={todoTypeList:[],todoListData:{}},P=function(e,t){var a=Object(m.a)({},e.todoListData);return t.todo&&(a[t.key]=a[t.key]?Object(i.a)(a[t.key]):[],a[t.key].push(t.todo)),a},u=function(e,t){var a=t.key,A=t.todo,o=Object(m.a)({},e.todoListData),n=o[a].filter(function(e){return e!==A});return n.length?Object(m.a)({},o,Object(s.a)({},a,n)):(delete o[a],Object(m.a)({},o))},g=function(e,t){var a=t.key,A=Object(m.a)({},e.todoListData),o=Object(i.a)(e.todoTypeList);return 1===A[a].length&&(o=o.filter(function(e){return e!==a})),o},E=function(e,t){var a=Object(i.a)(e.todoTypeList);return t&&a.push(t),a};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"ADD_TODO":return a?e.todoListData[a.key]&&e.todoListData[a.key].includes(a.todo)?e:Object(m.a)({},e,{todoListData:P(e,a)}):e;case"COMPLETE":return Object(m.a)({},e,{todoListData:u(e,a),todoTypeList:g(e,a)});case"TODO_TYPE_LIST":return e.todoTypeList.includes(a)?e:Object(m.a)({},e,{todoTypeList:E(e,a)});default:return e}}var y=n.a.memo(function(e){return console.log("render Todo Header"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h5",null,"List of Todos")),n.a.createElement("div",{className:"col-4"},e.children))}),h=a(4),T=a.n(h);function N(e){var t,a=e.activeTodo,A=Object(o.useContext)(r),c=A.state,l=A.dispatch,s=c.todoListData[a]||[],i=0===s.length?n.a.createElement("div",{className:"d-flex justify-content-center pt-1"},n.a.createElement("img",{className:"m-auto",src:T.a,alt:"empty screen"})):n.a.createElement(y,null,n.a.createElement("span",{className:"float-right"},(t=s.length)>1?" ".concat(t," Todos"):"".concat(t," Todo")));return console.log("list render"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("br",null),i)),s&&s.length>0&&n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("ul",{className:"list-group"},s.map(function(e){return n.a.createElement("li",{key:e,className:"list-group-item py-2"},e,n.a.createElement("button",{className:"float-right btn btn-success btn-sm",style:{marginLeft:10},onClick:function(){return l({type:"COMPLETE",payload:{key:a,todo:e}})}},"Mark Done"))}))))))}function Q(e){return console.log("input render"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{className:"form-control bg-light",value:e.value,autoFocus:!0,placeholder:e.placeholder,onKeyUp:e.handleSubmitForm,onChange:e.handleChange}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-info",onClick:e.handleClick},"Add")))))}function v(e){var t=Object(o.useContext)(r),a=t.state,c=t.dispatch,l=Object(o.useState)(""),s=Object(A.a)(l,2),i=s[0],m=s[1],d=Object(o.useState)(""),P=Object(A.a)(d,2),u=P[0],g=P[1];function E(){var t=a.todoListData[e.activeTodo];if(a.todoTypeList){if(!i.length)return g("Required Field"),!0;t&&t.includes(i)&&g("Already Exist"),c({type:"ADD_TODO",payload:{todo:i,key:e.activeTodo}}),m("")}else g("Need to Add Detail first")}console.log(e,"props");var p={value:i,autofocus:!0,placeholder:"Enter Todo",handleSubmitForm:function(e){13===e.keyCode&&E()},handleChange:function(e){m(e.target.value),e.target.value.length&&g("")},handleClick:E};return console.log("Form render"),n.a.createElement(n.a.Fragment,null,n.a.createElement(Q,p),u&&n.a.createElement("p",{className:"text-danger pt-2 mb-0"},u))}function w(e){return n.a.createElement("div",{className:"".concat(e.className," row col-12 ml-0 align-items-center")},n.a.createElement("hr",{className:"col"}),n.a.createElement("div",{className:"col-auto"},e.text),n.a.createElement("hr",{className:"col"}))}function b(){console.log("render container");var e=Object(o.useContext)(r),t=e.state,a=e.dispatch,c=Object(o.useState)(""),l=Object(A.a)(c,2),s=l[0],i=l[1],m=Object(o.useState)(t.todoTypeList[0]),d=Object(A.a)(m,2),P=d[0],u=d[1],g=Object(o.useState)(""),E=Object(A.a)(g,2),p=E[0],y=E[1];t.todoTypeList.length&&!t.todoTypeList.includes(P)&&u(t.todoTypeList[0]);var h=function(){t.todoTypeList&&t.todoTypeList.includes(s)?y("Already Exist"):s.length?(a({type:"TODO_TYPE_LIST",payload:s}),i("")):y("Required Field")};var b={value:s,autoFocus:!0,placeholder:"Todo Details",handleChange:function(e){i(e.target.value),e.target.value.length&&y("")},handleClick:h,handleSubmitForm:function(e){13===e.keyCode&&h()}};return n.a.createElement("div",{className:"col-12 pt-5 px-0 row ml-0 justify-content-between"},n.a.createElement("section",{className:"col-12 col-md-4 px-0"},n.a.createElement("h4",null,n.a.createElement("span",{className:"text-info"},"To"),"do ",n.a.createElement("span",{className:"text-info"},"Det"),"ails"),n.a.createElement(Q,b),p&&p.length&&n.a.createElement("p",{className:"text-danger pt-2 mb-0"},p),n.a.createElement("br",null),t.todoTypeList.length?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h6",{className:"mb-1"},"Todo Types"),n.a.createElement("ul",{className:"list-group"},t.todoTypeList.length>0&&t.todoTypeList.map(function(e){return n.a.createElement("li",{key:e,className:"list-group-item p-0",onClick:function(){return u(e)}},n.a.createElement("div",{style:{borderLeft:e===P?"4px solid #17a2b8":"none"},className:"py-2 px-3 "},e))})))):n.a.createElement("img",{src:T.a,alt:"list empty"})),n.a.createElement("section",{className:"col-12 col-md-6 px-0"},n.a.createElement(w,{text:"Todo List",className:"mt-3 d-md-none"}),n.a.createElement("h4",null,n.a.createElement("span",{className:"text-info"},"To"),"do ",n.a.createElement("span",{className:"text-info"},"Li"),"st"),n.a.createElement(v,{activeTodo:P}),n.a.createElement(N,{activeTodo:P})))}var f=a(8),C=a.n(f);function L(){var e=Object(o.useContext)(r);console.log(e,"main context");var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"state",a=localStorage.getItem(t);return a?JSON.parse(a):e}(e,"state"),a=function(e){var t=Object(A.a)(e,2),a=t[0],n=t[1],c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"state";return Object(o.useEffect)(function(){return localStorage.setItem(c,JSON.stringify(a))},[a]),[a,n]}(Object(o.useReducer)(p,t),"state"),c=Object(A.a)(a,2),l=c[0],s=c[1];return console.log(l,"main state"),n.a.createElement(r.Provider,{value:{state:l,dispatch:s}},n.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",{className:"pt-3 text-center text-info"},"Todo List",n.a.createElement("span",{className:"pl-1"}," ",n.a.createElement("img",{width:"30",src:C.a}))),n.a.createElement(b,null))))}var x=document.getElementById("root");l.a.render(n.a.createElement(L,null),x)},4:function(e,t){e.exports="data:image/jpeg;base64,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"},8:function(e,t,a){e.exports=a.p+"static/media/todoIcon.85cdde28.svg"},9:function(e,t,a){e.exports=a(14)}},[[9,2,1]]]);
//# sourceMappingURL=main.3ed33cc6.chunk.js.map