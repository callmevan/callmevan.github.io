(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"1ce8":function(e,t,n){"use strict";var r=n("d9d4"),o=n.n(r);o.a},4802:function(e,t,n){"use strict";var r=n("99b2"),o=n.n(r);o.a},"4c90":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,o,c,a,u=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HTserial"),n("Resisserial"),n("RGBserial"),n("Vocserial")],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],f={name:"HelloWorld",props:{msg:String}},d=f,g=(n("ccd1"),n("2877")),h=Object(g["a"])(d,l,p,!1,null,"379548a4",null),v=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isShow?n("button",{staticClass:"next buttonX",staticStyle:{"margin-top":"20px"},attrs:{id:"butConnect"},on:{click:function(t){return e.clickConnect()}}},[e._v(e._s(e.content))]):e._e(),n("p",[e._v("Temperature: "+e._s(e.temperature)+"℃")]),n("p",[e._v("Humidity: "+e._s(e.humidity)+"%")])])},m=[],x=(n("a15b"),n("d81d"),n("fb6a"),n("d3b7"),n("25f0"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("96cf"),n("1da1")),_={data:function(){return{port:null,inputDone:null,isShow:!0,raw:null,temperature:null,humidity:null,content:"Humidity Connect"}},created:function(){var e=this;"true"==sessionStorage.connection&&this.readLoop().catch((function(t){console.log(t),e.$store.dispatch("setConnectionData",!1)}))},methods:{connect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.serial.requestPort();case 2:return e.port=t.sent,t.next=5,e.port.open({baudrate:230400});case 5:new TextDecoderStream,r=e.port.readable.getReader(),e.readLoop().catch((function(e){console.log(e)}));case 8:case"end":return t.stop()}}),t)})))()},disconnect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}return t.next=3,r.cancel();case 3:r=null;case 4:return t.next=6,e.port.close();case 6:e.port=null;case 7:case"end":return t.stop()}}),t)})))()},clickConnect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.port){t.next=7;break}return t.next=3,e.disconnect();case 3:return e.toggleUIConnected(!1),e.contet="Humidity Connect",console.log("s"),t.abrupt("return");case 7:return t.next=9,e.connect();case 9:e.contet="Humidity Disconnect",e.toggleUIConnected(!0);case 11:case"end":return t.stop()}}),t)})))()},readLoop:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,o,c,a,u,i,s,l,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:0;case 1:return t.next=4,r.read();case 4:if(n=t.sent,o=n.value,c=n.done,console.log(o),24==o.length&&(a=o[5].toString(16),u=o[4].toString(16),i=o[7].toString(16),s=o[6].toString(16),u<10&&(u="0"+u),s<10&&(s="0"+s),l="0x"+a+u,p="0x"+i+s,e.temperature=parseInt(l)/100,e.humidity=parseInt(p)/100),!c){t.next=14;break}return console.log("[readLoop] DONE",c),r.releaseLock(),t.abrupt("break",16);case 14:t.next=1;break;case 16:case"end":return t.stop()}}),t)})))()},toggleUIConnected:function(e){document.getElementById("butConnect");this.content=e?"Humidity Disconnect":"Humidity Connect"},buf2hex:function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}}},w=_,k=(n("9979"),Object(g["a"])(w,b,m,!1,null,"062c003c",null)),C=k.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isShow?n("button",{staticClass:"next buttonX",staticStyle:{"margin-top":"20px"},attrs:{id:"butConnect"},on:{click:function(t){return e.clickConnect()}}},[e._v(e._s(e.content))]):e._e(),n("p",[e._v("Resistance: "+e._s(e.resistance)+"Ohm")])])},S=[],j={data:function(){return{port:null,inputDone:null,isShow:!0,raw:null,resistance:null,content:"Conductivity Connect"}},created:function(){var e=this;"true"==sessionStorage.connection&&this.readLoop().catch((function(t){console.log(t),e.$store.dispatch("setConnectionData",!1)}))},methods:{connect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.serial.requestPort();case 2:return e.port=t.sent,t.next=5,e.port.open({baudrate:230400});case 5:new TextDecoderStream,o=e.port.readable.getReader(),e.readLoop().catch((function(e){console.log(e)}));case 8:case"end":return t.stop()}}),t)})))()},disconnect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=4;break}return t.next=3,o.cancel();case 3:o=null;case 4:return t.next=6,e.port.close();case 6:e.port=null;case 7:case"end":return t.stop()}}),t)})))()},clickConnect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.port){t.next=5;break}return t.next=3,e.disconnect();case 3:return e.toggleUIConnected(!1),t.abrupt("return");case 5:return t.next=7,e.connect();case 7:e.toggleUIConnected(!0);case 8:case"end":return t.stop()}}),t)})))()},readLoop:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,r,c,a,u,i,s,l,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:0;case 1:return t.next=4,o.read();case 4:if(n=t.sent,r=n.value,c=n.done,console.log(r),24==r.length&&(a=r[5].toString(16),u=r[4].toString(16),i=r[7].toString(16),s=r[6].toString(16),u<10&&(u="0"+u),s<10&&(s="0"+s),l="0x"+a+u,p="0x"+i+s,e.resistance=parseInt(l)*parseInt(p)),!c){t.next=14;break}return console.log("[readLoop] DONE",c),o.releaseLock(),t.abrupt("break",16);case 14:t.next=1;break;case 16:case"end":return t.stop()}}),t)})))()},toggleUIConnected:function(e){document.getElementById("butConnect");this.content=e?"Conductivity Disconnect":"Conductivity Connect"},buf2hex:function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}}},O=j,R=(n("4802"),Object(g["a"])(O,y,S,!1,null,"3aaafe0a",null)),I=R.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isShow?n("button",{staticClass:"next buttonX",staticStyle:{"margin-top":"20px"},attrs:{id:"butConnect"},on:{click:function(t){return e.clickConnect()}}},[e._v(e._s(e.content))]):e._e(),n("p",[e._v("Red: "+e._s(e.r))]),n("p",[e._v("Green: "+e._s(e.g))]),n("p",[e._v("Blue: "+e._s(e.b))]),n("p",[e._v("White: "+e._s(e.w))])])},L=[],E={data:function(){return{port:null,inputDone:null,isShow:!0,raw:null,r:null,g:null,b:null,w:null,content:"Color Connect"}},created:function(){var e=this;"true"==sessionStorage.connection&&this.readLoop().catch((function(t){console.log(t),e.$store.dispatch("setConnectionData",!1)}))},methods:{connect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.serial.requestPort();case 2:return e.port=t.sent,t.next=5,e.port.open({baudrate:230400});case 5:new TextDecoderStream,c=e.port.readable.getReader(),e.readLoop().catch((function(e){console.log(e)}));case 8:case"end":return t.stop()}}),t)})))()},disconnect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!c){t.next=4;break}return t.next=3,c.cancel();case 3:c=null;case 4:return t.next=6,e.port.close();case 6:e.port=null;case 7:case"end":return t.stop()}}),t)})))()},clickConnect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.port){t.next=5;break}return t.next=3,e.disconnect();case 3:return e.toggleUIConnected(!1),t.abrupt("return");case 5:return t.next=7,e.connect();case 7:e.toggleUIConnected(!0);case 8:case"end":return t.stop()}}),t)})))()},readLoop:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,u,i,s,l,p,f,d,g,h,v,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:0;case 1:return t.next=4,c.read();case 4:if(n=t.sent,r=n.value,o=n.done,console.log(r),24==r.length&&(a=r[5].toString(16),u=r[4].toString(16),i=r[7].toString(16),s=r[6].toString(16),l=r[9].toString(16),p=r[8].toString(16),f=r[11].toString(16),d=r[10].toString(16),u<10&&(u="0"+u),s<10&&(s="0"+s),p<10&&(p="0"+p),d<10&&(d="0"+d),g="0x"+a+u,h="0x"+i+s,v="0x"+l+p,b="0x"+f+d,e.r=parseInt(g),e.g=parseInt(h),e.b=parseInt(v),e.w=parseInt(b)),!o){t.next=14;break}return console.log("[readLoop] DONE",o),c.releaseLock(),t.abrupt("break",16);case 14:t.next=1;break;case 16:case"end":return t.stop()}}),t)})))()},toggleUIConnected:function(e){document.getElementById("butConnect");this.content=e?"Color Disconnect":"Color Connect"},buf2hex:function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}}},U=E,$=(n("1ce8"),Object(g["a"])(U,D,L,!1,null,"43be8665",null)),P=$.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isShow?n("button",{staticClass:"next buttonX",staticStyle:{"margin-top":"20px"},attrs:{id:"butConnect"},on:{click:function(t){return e.clickConnect()}}},[e._v(e._s(e.content))]):e._e(),n("p",[e._v("tVoc: "+e._s(e.voc)+"ppb")]),n("p",[e._v("CO2eq: "+e._s(e.co2)+"ppm")])])},H=[],A={data:function(){return{port:null,inputDone:null,isShow:!0,raw:null,voc:null,co2:null,content:"VOC Connect"}},created:function(){var e=this;"true"==sessionStorage.connection&&this.readLoop().catch((function(t){console.log(t),e.$store.dispatch("setConnectionData",!1)}))},methods:{connect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.serial.requestPort({filters:[{usbVendorId:1240}]});case 2:return e.port=t.sent,t.next=5,e.port.open({baudrate:230400});case 5:new TextDecoderStream,a=e.port.readable.getReader(),e.readLoop().catch((function(e){console.log(e)}));case 8:case"end":return t.stop()}}),t)})))()},disconnect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=4;break}return t.next=3,a.cancel();case 3:a=null;case 4:return t.next=6,e.port.close();case 6:e.port=null;case 7:case"end":return t.stop()}}),t)})))()},clickConnect:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.port){t.next=5;break}return t.next=3,e.disconnect();case 3:return e.toggleUIConnected(!1),t.abrupt("return");case 5:return t.next=7,e.connect();case 7:e.toggleUIConnected(!0);case 8:case"end":return t.stop()}}),t)})))()},readLoop:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,r,o,c,u,i,s,l,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:0;case 1:return t.next=4,a.read();case 4:if(n=t.sent,r=n.value,o=n.done,console.log(r),24==r.length&&(c=r[5].toString(16),u=r[4].toString(16),i=r[7].toString(16),s=r[6].toString(16),u<10&&(u="0"+u),s<10&&(s="0"+s),l="0x"+c+u,p="0x"+i+s,e.voc=parseInt(l),e.co2=parseInt(p)),!o){t.next=14;break}return console.log("[readLoop] DONE",o),a.releaseLock(),t.abrupt("break",16);case 14:t.next=1;break;case 16:case"end":return t.stop()}}),t)})))()},toggleUIConnected:function(e){document.getElementById("butConnect");this.content=e?"VOC Disconnect":"VOC Connect"},buf2hex:function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}}},B=A,V=(n("c035"),Object(g["a"])(B,T,H,!1,null,"9de7c190",null)),q=V.exports,N={name:"App",components:{HelloWorld:v,HTserial:C,Resisserial:I,RGBserial:P,Vocserial:q}},M=N,X=(n("034f"),Object(g["a"])(M,i,s,!1,null,null,null)),G=X.exports;u["a"].config.productionTip=!1,new u["a"]({render:function(e){return e(G)}}).$mount("#app")},"85ec":function(e,t,n){},"88f3":function(e,t,n){},9979:function(e,t,n){"use strict";var r=n("b32b"),o=n.n(r);o.a},"99b2":function(e,t,n){},b32b:function(e,t,n){},c035:function(e,t,n){"use strict";var r=n("88f3"),o=n.n(r);o.a},ccd1:function(e,t,n){"use strict";var r=n("4c90"),o=n.n(r);o.a},d9d4:function(e,t,n){}});
//# sourceMappingURL=app.d2dabed3.js.map