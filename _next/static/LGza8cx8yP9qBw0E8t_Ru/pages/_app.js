(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))}},"/g4k":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};e.default=r},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),o=n("vuIU"),a=n("U8pU"),u=n("JX7q");function c(t,e){return!e||"object"!==Object(a.a)(e)&&"function"!==typeof e?Object(u.a)(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=n("q1tI"),s=n.n(l),p=n("8Bbg"),d=n.n(p),v=n("8Kt/"),h=n.n(v),y=n("bWLx"),m=n("wx14"),b=(n("17x9"),n("R/WZ")),g=Object(b.a)((function(t){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:"bolder"},body:Object(m.a)({margin:0,color:t.palette.text.primary},t.typography.body2,{backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white},"&::backdrop":{backgroundColor:t.palette.background.default}})}}}),{name:"MuiCssBaseline"});var _=function(t){var e=t.children,n=void 0===e?null:e;return g(),s.a.createElement(s.a.Fragment,null,n)},w=n("viY9"),P=n("/g4k"),k=n.n(P),S=n("VvZr"),A=n.n(S),O=Object(w.a)({palette:{primary:{light:k.a[300],main:k.a[500],dark:k.a[700]},secondary:{light:A.a[300],main:A.a[500],dark:A.a[700]}},typography:{useNextVariants:!0}}),x=n("YSmr"),C=s.a.createElement;function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var M=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,n=(e=a,function(){var t,n=i(e);if(j()){var r=i(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return c(this,t)});function a(){return Object(r.a)(this,a),n.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=document.querySelector("#jss-server-side");t&&t.parentNode.removeChild(t)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return C(s.a.Fragment,null,C(h.a,null,C("title",null,x.APP_NAME)),C(y.a,{theme:O},C(_,null),C(e,n)))}}]),a}(d.a);e.default=M},"5fIB":function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),u=n("lwAK"),c=n("FYa8"),i=n("/0+H");function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=f;var s=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var c=0,i=s.length;c<i;c++){var f=s[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;p.has(l)?a=!1:(p.add(l),r[f]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=a.default();function v(t){var e=t.children;return o.default.createElement(u.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:i.isInAmpMode(t)},e)}))}))}v.rewind=d.rewind,e.default=v},B5Ud:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("tCBg"),u=n("T0f4"),c=n("48fX"),i=n("vJKn");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var l=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=h,e.default=void 0;var s=l(n("q1tI")),p=n("g/15");function d(t){var e,n,r;return i.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,i.awrap((0,p.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}e.AppInitialProps=p.AppInitialProps;var v=function(t){c(i,t);var e,n=(e=i,function(){var t,n=u(e);if(f()){var r=u(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return a(this,t)});function i(){return r(this,i),n.apply(this,arguments)}return o(i,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return s.default.createElement(n,Object.assign({},r,o||a?{}:{url:h(e)}))}}]),i}(s.default.Component);function h(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=v,v.origGetInitialProps=d,v.getInitialProps=d},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},VvZr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};e.default=r},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),u=n("tCBg"),c=n("T0f4"),i=n("48fX"),f=n("mPvQ");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(e,"__esModule",{value:!0});var s=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(f){i(v,f);var s,d=(s=v,function(){var t,e=c(s);if(l()){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function v(t){var a;return r(this,v),a=d.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(v,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(v,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),v}(s.Component)}},YSmr:function(t,e,n){"use strict";n.r(e),n.d(e,"APP_NAME",(function(){return r}));var r="Test Bit Token Faucet"},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");t.exports=function(t){return r(t)||o(t)||a()}},rlHP:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}}},[[0,1,2,0,4]]]);