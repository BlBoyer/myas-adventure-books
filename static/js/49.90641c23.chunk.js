(self.webpackChunkmyas_adventures=self.webpackChunkmyas_adventures||[]).push([[49,65],{100:function(t,n,c){"use strict";c.d(n,{Z:function(){return l}});var e=c(791),r=c(967),a=c(184);function s(t){var n=t.routeInfo,c=["Welcome","Books","About","Author","Illustrator"],s=c.map((function(t,n){return[(0,a.jsxs)("a",{href:"".concat("https://blboyer.github.io/myas-adventure-books","/#").concat(t),id:"".concat(t,"-link"),className:"navbar py-s",children:[t,(0,a.jsx)("hr",{className:"navbar"},"h-".concat(n))]},"a-".concat(n)),(0,a.jsx)("hr",{id:"".concat(t,"-hr"),className:"navbar vr-lg"},"h-".concat(n+c.length))]}));return(0,e.useEffect)((function(){c.forEach((function(t){var e=document.getElementById("".concat(t,"-link")),a=document.getElementById("".concat(t,"-hr"));t===n[0]?(console.log("".concat(r.mg).concat(t," link set to inactive").concat(r.ec)),e.classList.add("inactive-link")):e.addEventListener("click",(function(){return n[1](t)})),t===c.slice(-1).toLocaleString()&&a.remove()}))}),[]),(0,a.jsx)("div",{id:"navbar",className:"navbar row align-c ml-m collapse-stack",children:s})}function o(){var t=(0,e.useRef)(),n=(0,e.useRef)();return(0,e.useEffect)((function(){n.current=document.getElementById("navbar"),n.current.classList.add("collapsed"),t.current=!0}),[]),(0,a.jsx)("div",{className:"nav-button",children:(0,a.jsx)("button",{onClick:function(){return t.current=!t.current,console.log("".concat(r.cy,"navbar collapsed: ").concat(r.rd).concat(t.current).concat(r.ec)),void(t.current?n.current.classList.add("collapsed"):n.current.classList.remove("collapsed"))},className:"nav-button txt-lg button-shade button-glow",children:"\u22ee"})})}function l(t){var n=t.routeInfo;return(0,a.jsxs)("div",{className:"header row align-c collapse-stack",children:[(0,a.jsx)("h1",{className:"header mx-xs accent-b black",children:n[0]}),(0,a.jsx)("div",{children:(0,a.jsx)("hr",{className:"header mx-xs vr-xl"})}),(0,a.jsx)(o,{}),(0,a.jsx)(s,{routeInfo:n})]})}},555:function(t,n,c){"use strict";c.d(n,{Z:function(){return a}});var e=c(791),r=c(184);function a(t){var n=t.routeInfo[0],a=n.toLowerCase(),s="Author"===n||"Illustrator"===n?"About the ":"",o=(0,e.lazy)((function(){return c(440)("./".concat(a,"/").concat(a,".story"))}));return(0,r.jsx)("div",{className:"".concat(a," row mx-vm px-m"),children:(0,r.jsxs)("div",{className:"".concat(a," col"),children:[(0,r.jsx)("div",{className:"".concat(a," row justify-c"),children:(0,r.jsxs)("div",{className:"".concat(a," col fit min-width"),children:[(0,r.jsxs)("h2",{className:"mb-a basic-txt-shade",children:[s,n]}),(0,r.jsx)("p",{className:"row justify-c mt-a",children:"\u294a \u294b"})]})}),(0,r.jsx)("div",{className:"".concat(a," row justify-c"),children:(0,r.jsx)(e.Suspense,{children:(0,r.jsx)(o,{})})})]})})}},49:function(t,n,c){"use strict";c.r(n),c.d(n,{default:function(){return s}});c(65);var e=c(100),r=c(555),a=c(184);function s(t){var n=t.routeInfo;return(0,a.jsx)("div",{id:"main-div",className:"illustrator row",children:(0,a.jsxs)("div",{className:"welcome col mx-vs my-xl bg-white faded-edge",children:[(0,a.jsx)(e.Z,{routeInfo:n}),(0,a.jsx)(r.Z,{routeInfo:n})]})})}},65:function(t,n,c){"use strict";c.r(n),n.default={}},440:function(t,n,c){var e={"./about/about.story":[614,614],"./author/author.story":[138,138],"./illustrator/illustrator.story":[144,144],"./welcome/welcome.story":[172,172]};function r(t){if(!c.o(e,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=e[t],r=n[0];return c.e(n[1]).then((function(){return c(r)}))}r.keys=function(){return Object.keys(e)},r.id=440,t.exports=r}}]);
//# sourceMappingURL=49.90641c23.chunk.js.map