(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),r=(n(10),n(3)),o=n(5),d=n.n(o),h=(n(12),n(0)),j="733e032764c575107abb413f431e1566",l="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({}),i=Object(r.a)(s,2),o=i[0],u=i[1];return Object(h.jsx)("div",{className:"undefined"!=typeof o.main&&o.main.temp>16?"app warm":"app",children:Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"search-box",children:Object(h.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return a(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(n,"&units=metric&APPID=").concat(j)).then((function(e){return e.json()})).then((function(e){u(e),a(""),console.log(e)}))}})}),"undefined"!=typeof o.main?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"location-box",children:[Object(h.jsxs)("div",{className:"location",children:[o.name,", ",o.sys.country]}),Object(h.jsx)("div",{className:"date",children:d()(new Date).format("dddd D MMMM YYYY")})]}),Object(h.jsxs)("div",{className:"weather-box",children:[Object(h.jsxs)("div",{className:"temp",children:[Math.round(o.main.temp),"\xb0c"]}),Object(h.jsx)("div",{className:"weather",children:o.weather[0].main})]})]}):""]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.e99ca98c.chunk.js.map