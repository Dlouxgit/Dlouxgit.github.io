(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cate-cate"],{"02c5":function(t,e,r){"use strict";var n=r("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("b095")),i={getCateList:function(t){return(0,o.default)({url:"/api/leju/front/kind/list",method:"get",data:t})}},a=i;e.default=a},"1e4e":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,".wrap[data-v-43e4e284]{margin-bottom:%?88?%}.topNav[data-v-43e4e284]{padding-bottom:%?1?%}.left[data-v-43e4e284]{margin-left:%?42?%}.right[data-v-43e4e284]{margin-right:%?64?%}.wrap[data-v-43e4e284]{background-color:#354e44}.cateBody[data-v-43e4e284]{background:#f1ece7;box-shadow:inset 0 16px 24px 0 rgba(83,66,49,.08);border-radius:%?40?%;border-bottom-left-radius:0;border-bottom-right-radius:0;overflow:hidden;margin-top:%?100?%}.bg[data-v-43e4e284]{margin-top:%?48?%;width:%?670?%;height:%?302?%;box-shadow:0 12px 20px 0 rgba(83,66,49,.05);border-radius:%?20?%;position:relative;overflow:hidden}.bg uni-image[data-v-43e4e284]{width:%?416?%}.bg .abImg[data-v-43e4e284]{position:absolute;right:0;bottom:0;width:%?492?%;height:100%;background-repeat:no-repeat;background-size:cover}.bg .abWrap[data-v-43e4e284]{position:absolute;top:%?148?%;left:%?52?%}.bg .abWrap uni-text[data-v-43e4e284]:first-child{font-size:%?48?%;color:#3e3e3e;letter-spacing:%?3.43?%}.bg .abWrap uni-text[data-v-43e4e284]:last-child{font-size:%?30?%;color:#7f7f7f;letter-spacing:%?2.14?%}.bg1[data-v-43e4e284]{background-color:#d5d5d5;margin-left:%?40?%}.bg1 .abImg[data-v-43e4e284]{width:%?416?%;height:%?252?%}.bg2[data-v-43e4e284]{background-color:#fff;margin-left:%?40?%}.bg2 .abImg[data-v-43e4e284]{background-position-y:%?-100?%}.bg3[data-v-43e4e284]{width:%?312?%;height:%?442?%;display:inline-block;margin-right:%?46?%;margin-left:%?40?%;background:#fafafa}.bg3 .abImg[data-v-43e4e284]{width:%?312?%;height:%?392?%}.bg3 .abWrap[data-v-43e4e284]{top:%?280?%}.bg4[data-v-43e4e284]{display:inline-block;width:%?312?%;height:%?442?%;margin-right:%?40?%;background-color:#d9d9d7}.bg4 .abImg[data-v-43e4e284]{width:%?312?%;height:%?392?%}.bg4 .abWrap[data-v-43e4e284]{top:%?280?%}[data-v-43e4e284] .uni-navbar__content{border-bottom-style:none}.iconWrap[data-v-43e4e284]{display:-webkit-box;display:-webkit-flex;display:flex}.Icon[data-v-43e4e284]{width:%?36?%;height:%?36?%;margin-right:%?46?%}.lastIcon[data-v-43e4e284]{margin-right:%?0?%}.LeftIcon[data-v-43e4e284]{width:%?42?%;height:%?42?%}",""]),t.exports=e},"35ab":function(t,e,r){var n=r("1e4e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("522db624",n,!0,{sourceMap:!1,shadowMode:!1})},6647:function(t,e,r){"use strict";var n={uniNavBar:r("49be").default},o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"wrap"},[r("v-uni-view",{staticClass:"topNav"},[r("uni-nav-bar",{attrs:{"background-color":"#354e44",color:"#fff",shadow:!1}},[r("v-uni-view",{attrs:{slot:"right"},slot:"right"},[r("v-uni-view",{staticClass:"iconWrap right"},[r("v-uni-image",{staticClass:"Icon",attrs:{src:"/static/icons/search.png",mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}}),r("v-uni-image",{staticClass:"Icon lastIcon",attrs:{src:"/static/icons/cart.png",mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCart.apply(void 0,arguments)}}})],1)],1),r("v-uni-view",{attrs:{slot:"left"},slot:"left"},[r("v-uni-view",{staticClass:"iconWrap left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contactMerchants.apply(void 0,arguments)}}},[r("v-uni-image",{staticClass:"LeftIcon",attrs:{src:"/static/icons/chat.png",mode:""}})],1)],1)],1)],1),r("v-uni-view",{staticClass:"cateBody"},t._l(t.cateList,(function(e,n){return r("v-uni-view",{key:e.id,staticClass:"bg",class:"bg"+(n+1),on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.cateClicked(e)}}},[r("v-uni-view",{staticClass:"abImg",style:{backgroundImage:"url("+e.img+")"}}),r("v-uni-view",{staticClass:"abWrap"},[r("v-uni-text",[t._v(t._s(e.ctitle))]),r("br"),r("v-uni-text",[t._v(t._s(e.etitle))])],1)],1)})),1)],1)},i=[];r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}))},"7ece":function(t,e,r){"use strict";r.r(e);var n=r("6647"),o=r("b2ca");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("aa92");var a,c=r("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"43e4e284",null,!1,n["a"],a);e["default"]=u.exports},"8a74":function(t,e,r){var n;r("99af"),r("4de4"),r("4160"),r("c975"),r("a15b"),r("13d5"),r("fb6a"),r("4e82"),r("accc"),r("b64b"),r("d3b7"),r("e25e"),r("ac1f"),r("25f0"),r("5319"),r("1276"),r("159b"),function(e){t.exports=e()}((function(){return function(){function t(e,r,o){function i(c,u){if(!r[c]){if(!e[c]){var s="function"==typeof n&&n;if(!u&&s)return n(c,!0);if(a)return a(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var f=r[c]={exports:{}};e[c][0].call(f.exports,(function(t){var r=e[c][1][t];return i(r||t)}),f,f.exports,t,e,r,o)}return r[c].exports}for(var a="function"==typeof n&&n,c=0;c<o.length;c++)i(o[c]);return i}return t}()({1:[function(t,e,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},{}],2:[function(t,e,r){"use strict";var n=t("./stringify"),o=t("./parse"),i=t("./formats");e.exports={formats:i,parse:o,stringify:n}},{"./formats":1,"./parse":3,"./stringify":4}],3:[function(t,e,r){"use strict";var n=t("./utils"),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(t){return t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(parseInt(e,10))}))},c="utf8=%26%2310003%3B",u="utf8=%E2%9C%93",s=function(t,e){var r,s={},l=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,d=l.split(e.delimiter,f),p=-1,h=e.charset;if(e.charsetSentinel)for(r=0;r<d.length;++r)0===d[r].indexOf("utf8=")&&(d[r]===u?h="utf-8":d[r]===c&&(h="iso-8859-1"),p=r,r=d.length);for(r=0;r<d.length;++r)if(r!==p){var y,v,g=d[r],b=g.indexOf("]="),m=-1===b?g.indexOf("="):b+1;-1===m?(y=e.decoder(g,i.decoder,h),v=e.strictNullHandling?null:""):(y=e.decoder(g.slice(0,m),i.decoder,h),v=e.decoder(g.slice(m+1),i.decoder,h)),v&&e.interpretNumericEntities&&"iso-8859-1"===h&&(v=a(v)),o.call(s,y)?s[y]=n.combine(s[y],v):s[y]=v}return s},l=function(t,e,r){for(var n=e,o=t.length-1;o>=0;--o){var i,a=t[o];if("[]"===a&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,u=parseInt(c,10);r.parseArrays||""!==c?!isNaN(u)&&a!==c&&String(u)===c&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[],i[u]=n):i[c]=n:i={0:n}}n=i}return n},f=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,c=i.exec(n),u=c?n.slice(0,c.index):n,s=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;s.push(u)}var f=0;while(null!==(c=a.exec(n))&&f<r.depth){if(f+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(c[1])}return c&&s.push("["+n.slice(c.index)+"]"),l(s,e,r)}};e.exports=function(t,e){var r=e?n.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"===typeof r.depth?r.depth:i.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:i.decoder,r.allowDots="undefined"===typeof r.allowDots?i.allowDots:!!r.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,"undefined"!==typeof r.charset&&"utf-8"!==r.charset&&"iso-8859-1"!==r.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if("undefined"===typeof r.charset&&(r.charset=i.charset),""===t||null===t||"undefined"===typeof t)return r.plainObjects?Object.create(null):{};for(var o="string"===typeof t?s(t,r):t,a=r.plainObjects?Object.create(null):{},c=Object.keys(o),u=0;u<c.length;++u){var l=c[u],d=f(l,o[l],r);a=n.merge(a,d,r)}return n.compact(a)}},{"./utils":5}],4:[function(t,e,r){"use strict";var n=t("./utils"),o=t("./formats"),i={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Array.isArray,c=Array.prototype.push,u=function(t,e){c.apply(t,a(e)?e:[e])},s=Date.prototype.toISOString,l={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,indices:!1,serializeDate:function(t){return s.call(t)},skipNulls:!1,strictNullHandling:!1},f=function t(e,r,o,i,a,c,s,f,d,p,h,y,v){var g=e;if("function"===typeof s?g=s(r,g):g instanceof Date&&(g=p(g)),null===g){if(i)return c&&!y?c(r,l.encoder,v):r;g=""}if("string"===typeof g||"number"===typeof g||"boolean"===typeof g||n.isBuffer(g)){if(c){var b=y?r:c(r,l.encoder,v);return[h(b)+"="+h(c(g,l.encoder,v))]}return[h(r)+"="+h(String(g))]}var m,w=[];if("undefined"===typeof g)return w;if(Array.isArray(s))m=s;else{var x=Object.keys(g);m=f?x.sort(f):x}for(var j=0;j<m.length;++j){var O=m[j];a&&null===g[O]||(Array.isArray(g)?u(w,t(g[O],o(r,O),o,i,a,c,s,f,d,p,h,y,v)):u(w,t(g[O],r+(d?"."+O:"["+O+"]"),o,i,a,c,s,f,d,p,h,y,v)))}return w};e.exports=function(t,e){var r=t,a=e?n.assign({},e):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!==typeof a.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof a.delimiter?l.delimiter:a.delimiter,s="boolean"===typeof a.strictNullHandling?a.strictNullHandling:l.strictNullHandling,d="boolean"===typeof a.skipNulls?a.skipNulls:l.skipNulls,p="boolean"===typeof a.encode?a.encode:l.encode,h="function"===typeof a.encoder?a.encoder:l.encoder,y="function"===typeof a.sort?a.sort:null,v="undefined"===typeof a.allowDots?l.allowDots:!!a.allowDots,g="function"===typeof a.serializeDate?a.serializeDate:l.serializeDate,b="boolean"===typeof a.encodeValuesOnly?a.encodeValuesOnly:l.encodeValuesOnly,m=a.charset||l.charset;if("undefined"!==typeof a.charset&&"utf-8"!==a.charset&&"iso-8859-1"!==a.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if("undefined"===typeof a.format)a.format=o["default"];else if(!Object.prototype.hasOwnProperty.call(o.formatters,a.format))throw new TypeError("Unknown format option provided.");var w,x,j=o.formatters[a.format];"function"===typeof a.filter?(x=a.filter,r=x("",r)):Array.isArray(a.filter)&&(x=a.filter,w=x);var O,L=[];if("object"!==typeof r||null===r)return"";O=a.arrayFormat in i?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var k=i[O];w||(w=Object.keys(r)),y&&w.sort(y);for(var E=0;E<w.length;++E){var C=w[E];d&&null===r[C]||u(L,f(r[C],C,k,s,d,p?h:null,x,y,v,g,j,b,m))}var A=L.join(c),_=!0===a.addQueryPrefix?"?":"";return a.charsetSentinel&&(_+="iso-8859-1"===m?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),A.length>0?_+A:""}},{"./formats":1,"./utils":5}],5:[function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),i=function(t){while(t.length>1){var e=t.pop(),r=e.obj[e.prop];if(Array.isArray(r)){for(var n=[],o=0;o<r.length;++o)"undefined"!==typeof r[o]&&n.push(r[o]);e.obj[e.prop]=n}}},a=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)"undefined"!==typeof t[n]&&(r[n]=t[n]);return r},c=function t(e,r,o){if(!r)return e;if("object"!==typeof r){if(Array.isArray(e))e.push(r);else{if("object"!==typeof e)return[e,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!==typeof e)return[e].concat(r);var i=e;return Array.isArray(e)&&!Array.isArray(r)&&(i=a(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach((function(r,i){n.call(e,i)?e[i]&&"object"===typeof e[i]?e[i]=t(e[i],r,o):e.push(r):e[i]=r})),e):Object.keys(r).reduce((function(e,i){var a=r[i];return n.call(e,i)?e[i]=t(e[i],a,o):e[i]=a,e}),i)},u=function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},s=function(t,e,r){var n=t.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(o){return n}},l=function(t,e,r){if(0===t.length)return t;var n="string"===typeof t?t:String(t);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"}));for(var i="",a=0;a<n.length;++a){var c=n.charCodeAt(a);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?i+=n.charAt(a):c<128?i+=o[c]:c<2048?i+=o[192|c>>6]+o[128|63&c]:c<55296||c>=57344?i+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]:(a+=1,c=65536+((1023&c)<<10|1023&n.charCodeAt(a)),i+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c])}return i},f=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var o=e[n],a=o.obj[o.prop],c=Object.keys(a),u=0;u<c.length;++u){var s=c[u],l=a[s];"object"===typeof l&&null!==l&&-1===r.indexOf(l)&&(e.push({obj:a,prop:s}),r.push(l))}return i(e),t},d=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},p=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},h=function(t,e){return[].concat(t,e)};e.exports={arrayToObject:a,assign:u,combine:h,compact:f,decode:s,encode:l,isBuffer:p,isRegExp:d,merge:c}},{}]},{},[2])(2)}))},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=w;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",y={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==n&&o.call(b,a)&&(v=b);var m=L.prototype=j.prototype=Object.create(v);O.prototype=m.constructor=L,L.constructor=O,L[u]=O.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[c]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var o=new E(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,e,r,n){var o=e&&e.prototype instanceof j?e:j,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=C(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function j(){}function O(){}function L(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function C(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return I()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=A(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}function A(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,A(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a82d:function(t,e,r){"use strict";var n=r("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("c964")),i=n(r("02c5")),a={data:function(){return{cateList:[]}},onShow:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.getCateList();case 2:r=e.sent,n=r.data,console.log(n),t.cateList=n.data;case 6:case"end":return e.stop()}}),e)})))()},methods:{contactMerchants:function(){uni.showToast({title:"客服暂未开通",icon:"none"})},cateClicked:function(t){uni.setStorageSync("goodsCateListId",t.id),uni.navigateTo({url:"/pages/cate/goodslist/goodslist"})},toSearch:function(){uni.navigateTo({url:"/pages/index/search/search"})},toCart:function(){uni.navigateTo({url:"/pages/order/cart/cart"})}}};e.default=a},aa92:function(t,e,r){"use strict";var n=r("35ab"),o=r.n(n);o.a},b095:function(t,e,r){"use strict";var n=r("ee27");r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("8a74")),i="http://www.bufantec.com";function a(t){return new Promise((function(e,r){"get"===t.method.toLowerCase()?uni.request({url:i+t.url,method:t.method,timeout:5e3,data:t.data,success:function(t){e(t)},fail:function(t){r(t)}}):uni.request({url:i+t.url,method:t.method,timeout:5e3,data:o.default.stringify(t.data,{allowDots:!0}),header:{"content-type":"application/x-www-form-urlencoded","bufan-token":uni.getStorageSync("key")},success:function(t){e(t)},fail:function(t){r(t)}})}))}var c=a;e.default=c},b2ca:function(t,e,r){"use strict";r.r(e);var n=r("a82d"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},c964:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}}}]);