(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ab71908"],{"02f4":function(t,e,n){var i=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var a,c,o=String(r(e)),u=i(n),s=o.length;return u<0||u>=s?t?"":void 0:(a=o.charCodeAt(u),a<55296||a>56319||u+1===s||(c=o.charCodeAt(u+1))<56320||c>57343?t?o.charAt(u):a:t?o.slice(u,u+2):c-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"0a49":function(t,e,n){var i=n("9b43"),r=n("626a"),a=n("4bf8"),c=n("9def"),o=n("cd1c");t.exports=function(t,e){var n=1==t,u=2==t,s=3==t,l=4==t,A=6==t,f=5==t||A,d=e||o;return function(e,o,p){for(var v,h,g=a(e),m=r(g),b=i(o,p,3),x=c(m.length),I=0,w=n?d(e,x):u?d(e,0):void 0;x>I;I++)if((f||I in m)&&(v=m[I],h=b(v,I,g),t))if(n)w[I]=h;else if(h)switch(t){case 3:return!0;case 5:return v;case 6:return I;case 2:w.push(v)}else if(l)return!1;return A?-1:s||l?l:w}}},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0c7c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-aside",{attrs:{width:"240px"}},[n("navmenu")],1),n("el-container",[n("el-header",[n("router-view",{attrs:{name:"header"}})],1),n("el-main",[n("router-view",{attrs:{name:"main"}})],1)],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{staticClass:"tac"},[i("el-col",{attrs:{span:24}},[i("el-menu",{staticClass:"el-menu",attrs:{"default-active":t.activeNav,"unique-opened":"",router:"","background-color":"#00577E","text-color":"#fff","active-text-color":"#fff"},on:{open:t.handleOpen,close:t.handleClose}},[i("div",{attrs:{id:"div_logo"}},[i("img",{attrs:{src:n("30f14"),id:"icon_text"}}),i("a",{on:{click:t.quit}},[i("img",{attrs:{src:n("2373"),id:"icon_more"}})])]),i("el-menu-item",{attrs:{index:"/Dashboard/Overview"}},[i("span",{staticClass:"nav_span",attrs:{slot:"title"},slot:"title"},[i("b",[t._v("Overview")])])]),i("div",{attrs:{id:"div_client"}},[i("span",{attrs:{id:"clients"}},[t._v("CLIENTS")])]),t._l(t.category,(function(e){return i("el-menu-item",{staticClass:"nav-name",attrs:{index:e.componentName,route:""},domProps:{textContent:t._s(e.name)},on:{click:function(n){return t.setPatient(e)}}})}))],2)],1)],1)},c=[],o=(n("7514"),n("ac6a"),n("28a5"),n("7f7f"),n("bc3a")),u=n.n(o),s={data:function(){return{activeNav:"/Overview",patient:"",category:[],raw:""}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},setPatient:function(t){this.$store.dispatch("setPatient_idData",t.uidPatient),this.$store.dispatch("setPatient_nameData",t.name),console.log(this.$store.state.patient_id)},quit:function(){this.$store.dispatch("setUserData",""),this.$router.push({path:"/login"})}},filters:{},created:function(){var t=window.location.href.split("/").length;this.activeNav=window.location.href.split("/")[t-1],console.log(this.activeNav)},mounted:function(){var t=this,e="http://35.197.160.94:8094/doctor/overview?uid_doctor="+this.$store.state.user;u.a.get(e).then((function(e){t.raw=e.data,t.raw.forEach((function(e){var n=e.firstName+" "+e.lastName,i=t.category.find((function(t){return t.name===n}));i||t.category.push({name:n,componentName:"/Dashboard/Detail/trends",uidPatient:e.uid}),0})),console.log(t.category)})).catch((function(e){console.log(e),t.$message({message:"Network Error",type:"error"})}))},watch:{$route:function(t,e){var n=window.location.href.split("/").length;this.activeNav=window.location.href.split("/")[n-1],console.log(this.activeNav)}}},l=s,A=(n("6f8d"),n("2877")),f=Object(A["a"])(l,a,c,!1,null,null,null),d=f.exports,p={name:"app",components:{navmenu:d}},v=p,h=Object(A["a"])(v,i,r,!1,null,null,null);e["default"]=h.exports},1169:function(t,e,n){var i=n("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),r=n("32e9"),a=n("79e5"),c=n("be13"),o=n("2b4c"),u=n("520a"),s=o("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),A=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=o(t),d=!a((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=d?!a((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[f](""),!e})):void 0;if(!d||!p||"replace"===t&&!l||"split"===t&&!A){var v=/./[f],h=n(c,f,""[t],(function(t,e,n,i,r){return e.exec===u?d&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}})),g=h[0],m=h[1];i(String.prototype,t,g),r(RegExp.prototype,f,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},2373:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAA0CAYAAAC+XNknAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDktMDVUMTI6MTA6MDcrMTI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA5LTA1VDE0OjI1OjQ1KzEyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA5LTA1VDE0OjI1OjQ1KzEyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY5YTQxYjAyLTM4ZGYtNGNmNC1hN2JmLTkyNWM5NDViZDI0YiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmOWE0MWIwMi0zOGRmLTRjZjQtYTdiZi05MjVjOTQ1YmQyNGIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmOWE0MWIwMi0zOGRmLTRjZjQtYTdiZi05MjVjOTQ1YmQyNGIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY5YTQxYjAyLTM4ZGYtNGNmNC1hN2JmLTkyNWM5NDViZDI0YiIgc3RFdnQ6d2hlbj0iMjAxOS0wOS0wNVQxMjoxMDowNysxMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+km/WJQAAAWxJREFUSIntlTFOw0AQRd9sAoiWCg4ChGvCPeAANDTUCBpScAAqJBQFYXY9n8JrYm8cklSk4Esrj3b+zM7s+NtIIq87FXB3uXvMPiRhkgDEGkj+ahZOAvC4jgxgFo6Be1M+YlOEbci7GuDu1VYBIYTpFvxnJFHF+r6cchd1SnU2aV8LJD1UMc1WxExb3j92BJ3BXa0Ymku6/BlcNnyQ6YvteZWu24BVmYdws5Wmq+SzXfwI5JvYiCyJYGaY2ZJjCGZGMLPbIUeJeRUj8Igk3P3tt8v/qGLMZtO0mR0BT6n2z35p8Jn8/XB//AIsH/uPv4MWmj4bkqpLtaRzFf/pCIx7iTp2Z8QWgDN1yCWxeB/OexLVMqFfPqinuA10ZL2AARn8IHrzDG0p/FJOcgjW+Mels9uHcpmjsNgLbWYBtZZPaTPTCZjUaqryoukuMbsm7eC+qqSwN7JRWN2401QHwP7B2C5Kspol4BQYAXwDfwLPZvHTKgAAAAAASUVORK5CYII="},"28a5":function(t,e,n){"use strict";var i=n("aae3"),r=n("cb7c"),a=n("ebd6"),c=n("0390"),o=n("9def"),u=n("5f1b"),s=n("520a"),l=n("79e5"),A=Math.min,f=[].push,d="split",p="length",v="lastIndex",h=4294967295,g=!l((function(){RegExp(h,"y")}));n("214f")("split",2,(function(t,e,n,l){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[p]||2!="ab"[d](/(?:ab)*/)[p]||4!="."[d](/(.?)(.?)/)[p]||"."[d](/()()/)[p]>1||""[d](/.?/)[p]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(r,t,e);var a,c,o,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),A=0,d=void 0===e?h:e>>>0,g=new RegExp(t.source,l+"g");while(a=s.call(g,r)){if(c=g[v],c>A&&(u.push(r.slice(A,a.index)),a[p]>1&&a.index<r[p]&&f.apply(u,a.slice(1)),o=a[0][p],A=c,u[p]>=d))break;g[v]===a.index&&g[v]++}return A===r[p]?!o&&g.test("")||u.push(""):u.push(r.slice(A)),u[p]>d?u.slice(0,d):u}:"0"[d](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r,i):m.call(String(r),n,i)},function(t,e){var i=l(m,t,this,e,m!==n);if(i.done)return i.value;var s=r(t),f=String(this),d=a(s,RegExp),p=s.unicode,v=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(g?"y":"g"),b=new d(g?s:"^(?:"+s.source+")",v),x=void 0===e?h:e>>>0;if(0===x)return[];if(0===f.length)return null===u(b,f)?[f]:[];var I=0,w=0,L=[];while(w<f.length){b.lastIndex=g?w:0;var y,G=u(b,g?f:f.slice(w));if(null===G||(y=A(o(b.lastIndex+(g?0:w)),f.length))===I)w=c(f,w,p);else{if(L.push(f.slice(I,w)),L.length===x)return L;for(var R=1;R<=G.length-1;R++)if(L.push(G[R]),L.length===x)return L;w=I=y}}return L.push(f.slice(I)),L}]}))},"30f14":function(t,e){t.exports="data:image/png;base64,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"},"520a":function(t,e,n){"use strict";var i=n("0bfb"),r=RegExp.prototype.exec,a=String.prototype.replace,c=r,o="lastIndex",u=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[o]||0!==e[o]}(),s=void 0!==/()??/.exec("")[1],l=u||s;l&&(c=function(t){var e,n,c,l,A=this;return s&&(n=new RegExp("^"+A.source+"$(?!\\s)",i.call(A))),u&&(e=A[o]),c=r.call(A,t),u&&c&&(A[o]=A.global?c.index+c[0].length:e),s&&c&&c.length>1&&a.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"6f8d":function(t,e,n){"use strict";var i=n("d10d"),r=n.n(i);r.a},7514:function(t,e,n){"use strict";var i=n("5ca1"),r=n("0a49")(5),a="find",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),i(i.P+i.F*c,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},"7f7f":function(t,e,n){var i=n("86cc").f,r=Function.prototype,a=/^\s*function ([^ (]*)/,c="name";c in r||n("9e1e")&&i(r,c,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},aae3:function(t,e,n){var i=n("d3f4"),r=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},ac6a:function(t,e,n){for(var i=n("cadf"),r=n("0d58"),a=n("2aba"),c=n("7726"),o=n("32e9"),u=n("84f2"),s=n("2b4c"),l=s("iterator"),A=s("toStringTag"),f=u.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(d),v=0;v<p.length;v++){var h,g=p[v],m=d[g],b=c[g],x=b&&b.prototype;if(x&&(x[l]||o(x,l,f),x[A]||o(x,A,g),u[g]=f,m))for(h in i)x[h]||a(x,h,i[h],!0)}},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},cd1c:function(t,e,n){var i=n("e853");t.exports=function(t,e){return new(i(t))(e)}},d10d:function(t,e,n){},e853:function(t,e,n){var i=n("d3f4"),r=n("1169"),a=n("2b4c")("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}}}]);
//# sourceMappingURL=chunk-5ab71908.327d3df4.js.map