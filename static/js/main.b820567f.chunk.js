(this["webpackJsonpnbaratings-web-react"]=this["webpackJsonpnbaratings-web-react"]||[]).push([[0],{115:function(n,e,t){n.exports=t(223)},120:function(n,e,t){},128:function(n,e){},130:function(n,e){},140:function(n,e){},142:function(n,e){},169:function(n,e){},171:function(n,e){},172:function(n,e){},178:function(n,e){},180:function(n,e){},198:function(n,e){},200:function(n,e){},212:function(n,e){},215:function(n,e){},223:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(108),c=t.n(o),i=(t(120),t(109)),u=t(110),l=t(52),s=t(114),d=t(53),m=t.n(d),f=function(n){for(var e=[],t=0;t<n;t++)e.push(t);return e},b=function(){return{team:m.a.generate({words:1,numbers:0}),winEfficiency:m.a.generate({words:1,numbers:0}),value2019_20:Math.floor(30*Math.random()),wins:Math.floor(100*Math.random()),rating2k:Math.floor(100*Math.random())}};function h(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=e[n];return f(t).map((function(n){return Object(s.a)({},b())}))};return r()}function p(){var n=Object(i.a)(["\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"]);return p=function(){return n},n}var g=u.a.div(p());function w(n){var e=n.columns,t=n.data,r=Object(l.useTable)({columns:e,data:t},l.useSortBy),o=r.getTableProps,c=r.getTableBodyProps,i=r.headerGroups,u=r.rows,s=r.prepareRow;return a.a.createElement(a.a.Fragment,null,a.a.createElement("table",o(),a.a.createElement("thead",null,i.map((function(n){return a.a.createElement("tr",n.getHeaderGroupProps(),n.headers.map((function(n){})))}))),a.a.createElement("tbody",c(),u.map((function(n,e){return s(n),a.a.createElement("tr",n.getRowProps(),n.cells.map((function(n){return a.a.createElement("td",n.getCellProps(),n.render("Cell"))})))})))),a.a.createElement("br",null))}var v=function(){var n=a.a.useMemo((function(){return[{Header:"Teams",columns:[{Header:"Team",accessor:"team"},{Header:"Win Efficiency",accessor:"winEfficiency"},{Header:"2019-20 Value",accessor:"value2019_20"},{Header:"Wins",accessor:"wins"},{Header:"2K Rating",accessor:"rating2k"}]}]}),[]),e=a.a.useMemo((function(){return h(2e3)}),[]);return a.a.createElement(g,null,a.a.createElement(w,{columns:n,data:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.b820567f.chunk.js.map