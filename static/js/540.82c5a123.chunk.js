(self.webpackChunkmyas_adventures=self.webpackChunkmyas_adventures||[]).push([[540,277],{9805:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(8192);var c=t(2791),a=t(184);function o(e){var n=e.routeName,t=(0,c.useRef)(!1);function o(){t.current=!t.current;var e,c=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var c=0,a=function(){};return{s:a,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(l)throw o}}}}(document.getElementsByClassName("faded-edge ".concat(n.toLowerCase())));try{for(c.s();!(e=c.n()).done;){var a=e.value;console.log(t.current),t.current?(a.classList.add("collapsed"),document.getElementById("navbar").style.zIndex=-1):(a.classList.remove("collapsed"),document.getElementById("navbar").style.zIndex=1)}}catch(o){c.e(o)}finally{c.f()}}return(0,a.jsx)("button",{onClick:function(){return o()},className:"bg-display-button bg-translucent pb-xs px-xs imagine-border rounded",title:"view background image",children:"\ud83d\udcf7"})}},1100:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(2791),c=t(3967),a=t(184);function o(e){var n=e.routeInfo,t=["Welcome","Books","Maya","Author","Illustrator"],o=t.map((function(e,n){return[(0,a.jsxs)("a",{href:"".concat("https://blboyer.github.io/myas-adventure-books","/#").concat(e),id:"".concat(e,"-link"),className:"navbar py-s",children:[e,(0,a.jsx)("hr",{className:"navbar"},"h-".concat(n))]},"a-".concat(n)),(0,a.jsx)("hr",{id:"".concat(e,"-hr"),className:"navbar vr-lg"},"h-".concat(n+t.length))]}));return(0,r.useEffect)((function(){t.forEach((function(e){var r=document.getElementById("".concat(e,"-link")),a=document.getElementById("".concat(e,"-hr"));e===n[0]?(console.log("".concat(c.mg).concat(e," link set to inactive").concat(c.ec)),r.classList.add("inactive-link")):r.addEventListener("click",(function(){return n[1](e)})),e===t.slice(-1).toLocaleString()&&a.remove()}))}),[]),(0,a.jsx)("div",{id:"navbar",className:"navbar row align-c ml-m collapse-stack",children:o})}function s(){var e=(0,r.useRef)(),n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=document.getElementById("navbar"),n.current.classList.add("collapsed"),e.current=!0}),[]),(0,a.jsx)("div",{className:"nav-button",children:(0,a.jsx)("button",{onClick:function(){return e.current=!e.current,console.log("".concat(c.cy,"navbar collapsed: ").concat(c.rd).concat(e.current).concat(c.ec)),void(e.current?n.current.classList.add("collapsed"):n.current.classList.remove("collapsed"))},className:"nav-button txt-lg button-shade button-glow",children:"\u22ee"})})}function l(e){var n=e.routeInfo;return(0,a.jsxs)("div",{className:"header row align-c collapse-stack",children:[(0,a.jsx)("h1",{className:"header mx-xs accent-b black",children:n[0]}),(0,a.jsx)("div",{children:(0,a.jsx)("hr",{className:"header mx-xs vr-xl"})}),(0,a.jsx)(s,{}),(0,a.jsx)(o,{routeInfo:n})]})}},2555:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(2791),c=t(184);function a(e){var n=e.routeInfo[0],a=n.toLowerCase(),o="Author"===n||"Illustrator"===n?"About the ":"",s=(0,r.lazy)((function(){return t(6440)("./".concat(a,"/").concat(a,".story"))}));return(0,c.jsx)("div",{className:"".concat(a," row mx-vm px-m"),children:(0,c.jsxs)("div",{className:"".concat(a," col"),children:[(0,c.jsx)("div",{className:"".concat(a," row justify-c"),children:(0,c.jsxs)("div",{className:"".concat(a," col fit min-width"),children:[(0,c.jsxs)("h2",{className:"mb-a basic-txt-shade",children:[o,n]}),(0,c.jsx)("p",{className:"row justify-c mt-a",children:"\u294a \u294b"})]})}),(0,c.jsx)("div",{className:"".concat(a," row justify-c"),children:(0,c.jsx)(r.Suspense,{children:(0,c.jsx)(s,{})})})]})})}},7540:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});t(6277);var r=t(9805),c=t(1100),a=t(2555),o=t(184);function s(e){var n=e.routeInfo;return(0,o.jsxs)("div",{id:"welcome",className:"welcome row",children:[(0,o.jsx)(r.Z,{routeName:n[0]}),(0,o.jsxs)("div",{className:"welcome col mx-vs my-xl bg-white faded-edge",children:[(0,o.jsx)(c.Z,{routeInfo:n}),(0,o.jsx)(a.Z,{routeInfo:n})]})]})}},6277:function(e,n,t){"use strict";t.r(n),n.default={}},6440:function(e,n,t){var r={"./author/author.story":[1138,138],"./illustrator/illustrator.story":[1144,144],"./maya/maya.story":[589,589],"./welcome/welcome.story":[172,172]};function c(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(r)},c.id=6440,e.exports=c}}]);
//# sourceMappingURL=540.82c5a123.chunk.js.map