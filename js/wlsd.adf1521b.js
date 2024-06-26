(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={wlsd:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([2,"chunk-vendors"]),n()})({"0208":function(e,t,n){"use strict";n("2eec")},2:function(e,t,n){e.exports=n("4a2e")},"2eec":function(e,t,n){},"4a2e":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"main"},[n("b-container",{staticClass:"maincontainer"},[n("div",{staticClass:"container"},[n("h4",[e._v("Introduction")]),n("p",[e._v("Survival analysis is a statistical practice for evaluating the occurrence of events over time. These techniques were originally focused on the time until death occurs but can be generalized for different types of events. For example, the event may be onset of an illness, occurrence of pain, or the failure of a machine. These events also need not occur only once. Models can look at repeated events or multiple events. For the models that use different numbers of events or different implementations of the same model, data formats exist to supply information as input to the model. Such formats might include counting process format for one event where time is organized through a column-wise interval. Performing analysis using one or more of these models means that the same data set might need to be transformed into different formats.")]),n("p",[e._v("The wlsd package (wrangling longitudinal survival data) is an R package that provides a set of functions for transitioning between different usable data formats for survival analysis. This project began as tangential work to some graduate research. As the research progressed, the tailored code for data formatting was constantly rewritten to accommodate the latest needs. The code was then generalized into reusable functions that were bundled into an R package to be made more readily accessible to other projects and other researchers. Currently, the package does not exist as one of R’s supported packages on the Comprehensive R Archive Network (CRAN) but may be available as such in the future. As of right now, the package exists on GitHub and can be installed from there. The "),n("a",{attrs:{href:"https://github.com/ci2131a/wlsd"}},[e._v("GitHub repository")]),e._v(" has all available source code as well as some examples. For more detailed information, see the package README or vignette and stay tuned for any future updates.")])])]),e._m(1)],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"toprow"},[a("div",{staticClass:"topimage"},[a("img",{staticStyle:{margin:"20px 20px 20px 20px",width:"200px",height:"auto"},attrs:{src:n("a552")}})]),a("div",{staticClass:"toptext"},[a("h1",[e._v("Wrangling Longitudinal Surival Data (wlsd)")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feet"},[n("footer",[e._v("© Copyright 2024 Charles Ingulli")])])}],i={name:"App"},s=i,l=(n("0208"),n("2877")),c=Object(l["a"])(s,r,o,!1,null,null,null),u=c.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(u)}}).$mount("#app")},a552:function(e,t,n){e.exports=n.p+"img/wlsd-logo.13f48cfa.png"}});
//# sourceMappingURL=wlsd.adf1521b.js.map