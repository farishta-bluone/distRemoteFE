(function(e){function t(t){for(var a,s,o=t[0],u=t[1],f=t[2],i=0,l=[];i<o.length;i++)s=o[i],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&l.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},s={app:0},r={app:0},c=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-7c38df72":"feec691c","chunk-98955f04":"522263b9"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-7c38df72":1,"chunk-98955f04":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-7c38df72":"d919c1f2","chunk-98955f04":"7abd7a64"}[e]+".css",r=u.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var f=c[o],i=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(i===a||i===r))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){f=l[o],i=f.getAttribute("data-href");if(i===a||i===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete s[e],d.parentNode.removeChild(d),n(c)},d.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){s[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var f,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(e);var l=new Error;f=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}r[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:i})}),12e4);i.onerror=i.onload=f,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"41cb":function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),s=n("8c4f");a["default"].use(s["a"]),t["a"]=new s["a"]({mode:"history",scrollBehavior:function(e,t,n){return n||{x:0,y:0}},routes:[{path:"/",redirect:{name:"list"}},{path:"/login",name:"login",meta:{layout:"no-header"},component:function(){return n.e("chunk-7c38df72").then(n.bind(null,"013f"))}},{path:"/list",name:"list",component:function(){return n.e("chunk-98955f04").then(n.bind(null,"78a7"))}}]})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},r=[],c="default",o={name:"App",computed:{layout:function(){return(this.$route.meta.layout||c)+"-layout"}},data:function(){return{}}},u=o,f=(n("034f"),n("2877")),i=Object(f["a"])(u,s,r,!1,null,null,null),l=i.exports,d=n("ce5b"),b=n.n(d);n("bf40");a["default"].use(b.a);var j={},m=new b.a(j),p=n("41cb"),h=(n("5363"),n("4de4"),n("c1df")),v=n.n(h);a["default"].prototype.moment=v.a,a["default"].filter("formatDate",(function(e){return null!=e?v()(e).format("MMM Do YYYY, hh:mm A"):""})),a["default"].filter("calendarDate",(function(e){return null!=e?v()(e).format("YYYY-MM-DD hh:mm:ss"):""}));var g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-page"},[n("div",{staticStyle:{"min-height":"56px"}},[n("Header")],1),n("div",{staticClass:"mx-8"},[e._t("default")],2)])},y=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{color:"#9932CC",dark:"",fixed:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",{staticClass:"title font-weight-bold"},[e._v("Vanser Metallics")]),n("v-spacer"),n("span",{staticClass:"subtitle-1 font-weight-bold mx-3"},[e._v("Farishta Sharma")]),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-bell")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-login")])],1),n("div",{staticStyle:{cursor:"pointer"}},[e._v("Logout")])],1)],1)},w=[],_={},z=Object(f["a"])(_,k,w,!1,null,null,null),x=z.exports,C={components:{Header:x},data:function(){return{}}},O=C,S=(n("fedd"),Object(f["a"])(O,g,y,!1,null,"20cf516c",null)),E=S.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default")],2)},P=[],M={},T=M,A=Object(f["a"])(T,L,P,!1,null,null,null),D=A.exports,Y=(n("d3b7"),n("2f62")),N=n("8ac1");a["default"].use(Y["a"]);var $=new Y["a"].Store({state:{totalRows:0,coils:[],isLoading:!1,btnColor:"#9932CC",coilDrawer:!1,companies:[{id:1,name:"SAIL"},{id:2,name:"Tata Steel Ltd"},{id:3,name:"Jindal Steel Ltd"}]},mutations:{},actions:{getCoils:function(e,t){var n=e.state;return t||(t={}),n.isLoading=!0,N["a"].get(t).then((function(e){n.coils=e.data.rows,n.totalRows=e.data.count})).catch((function(e){return console.log("error",e)})).finally((function(){return n.isLoading=!1}))}},modules:{}});a["default"].component("default-layout",E),a["default"].component("no-header-layout",D),a["default"].config.productionTip=!1,new a["default"]({router:p["a"],vuetify:m,store:$,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},"8ac1":function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),s=n.n(a),r=n("41cb"),c=s.a.create({baseURL:"http://localhost:5050/",timeout:5e5,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),o=function(e){if(!e.response)return Promise.reject(e);switch(e.response.status){case 400:break;case 401:r["a"].push({path:"/login"});break;default:}return Promise.reject(e)},u=function(e){switch(e.status){case 200:break;default:}return e};c.interceptors.response.use(u,o);var f=c,i="/list";t["a"]={get:function(e){return f.get(i,{params:e})},add:function(e){return f.post("/add",e)}}},"9b2d":function(e,t,n){},fedd:function(e,t,n){"use strict";n("9b2d")}});
//# sourceMappingURL=app.ea66e410.js.map