(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f8203ec"],{"0c6d":function(e,t,r){"use strict";r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("4328"),l=r.n(i),c=a.a.create({baseURL:"http://www.bufantec.com",timeout:5e3});function s(e){var t,r={};return r.url=e.url,"post"===(null===(t=e.method)||void 0===t?void 0:t.toLowerCase())?(r.method="post",r.headers={},r.headers["Content-Type"]="application/x-www-form-urlencoded",r.data=l.a.stringify(e.data,{allowDots:!0,arrayFormat:"repeat"})):r.params=e.data,c(r)}c.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return t}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=s},4127:function(e,t,r){"use strict";var n=r("d233"),a=r("b313"),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,a,o,i,c,s,u,d,p,f,h){var g=t;if("function"===typeof s)g=s(r,g);else if(g instanceof Date)g=p(g);else if(null===g){if(o)return c&&!h?c(r,l.encoder):r;g=""}if("string"===typeof g||"number"===typeof g||"boolean"===typeof g||n.isBuffer(g)){if(c){var m=h?r:c(r,l.encoder);return[f(m)+"="+f(c(g,l.encoder))]}return[f(r)+"="+f(String(g))]}var b,y=[];if("undefined"===typeof g)return y;if(Array.isArray(s))b=s;else{var v=Object.keys(g);b=u?v.sort(u):v}for(var w=0;w<b.length;++w){var O=b[w];i&&null===g[O]||(y=Array.isArray(g)?y.concat(e(g[O],a(r,O),a,o,i,c,s,u,d,p,f,h)):y.concat(e(g[O],r+(d?"."+O:"["+O+"]"),a,o,i,c,s,u,d,p,f,h)))}return y};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"===typeof i.delimiter?l.delimiter:i.delimiter,u="boolean"===typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,d="boolean"===typeof i.skipNulls?i.skipNulls:l.skipNulls,p="boolean"===typeof i.encode?i.encode:l.encode,f="function"===typeof i.encoder?i.encoder:l.encoder,h="function"===typeof i.sort?i.sort:null,g="undefined"!==typeof i.allowDots&&i.allowDots,m="function"===typeof i.serializeDate?i.serializeDate:l.serializeDate,b="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if("undefined"===typeof i.format)i.format=a["default"];else if(!Object.prototype.hasOwnProperty.call(a.formatters,i.format))throw new TypeError("Unknown format option provided.");var y,v,w=a.formatters[i.format];"function"===typeof i.filter?(v=i.filter,r=v("",r)):Array.isArray(i.filter)&&(v=i.filter,y=v);var O,j=[];if("object"!==typeof r||null===r)return"";O=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var k=o[O];y||(y=Object.keys(r)),h&&y.sort(h);for(var x=0;x<y.length;++x){var L=y[x];d&&null===r[L]||(j=j.concat(c(r[L],L,k,u,d,p?f:null,v,h,g,m,w,b)))}var P=j.join(s),_=!0===i.addQueryPrefix?"?":"";return P.length>0?_+P:""}},4328:function(e,t,r){"use strict";var n=r("4127"),a=r("9e6a"),o=r("b313");e.exports={formats:o,parse:a,stringify:n}},"9add":function(e,t,r){"use strict";var n=r("0c6d"),a={getAllBrandList:function(e){return Object(n["a"])({url:"/api/leju/admin/brand/listAll",data:e})},getBrandList:function(e){return Object(n["a"])({url:"/api/leju/admin/brand/list",data:e})},getBrandDetail:function(e){return Object(n["a"])({url:"/api/leju/admin/brand/detail",data:e})},delBrand:function(e){return Object(n["a"])({url:"/api/leju/admin/brand/del",data:e})},saveOrUpdateBrand:function(e){return Object(n["a"])({url:"/api/leju/admin/brand/saveOrUpdate",method:"post",data:e})}};t["a"]=a},"9e6a":function(e,t,r){"use strict";var n=r("d233"),a=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=n.split(t.delimiter,i),c=0;c<l.length;++c){var s,u,d=l[c],p=d.indexOf("]="),f=-1===p?d.indexOf("="):p+1;-1===f?(s=t.decoder(d,o.decoder),u=t.strictNullHandling?null:""):(s=t.decoder(d.slice(0,f),o.decoder),u=t.decoder(d.slice(f+1),o.decoder)),a.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r},l=function(e,t,r){for(var n=t,a=e.length-1;a>=0;--a){var o,i=e[a];if("[]"===i)o=[],o=o.concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(l,10);!isNaN(c)&&i!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(o=[],o[c]=n):o[l]=n}n=o}return n},c=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=o.exec(n),s=c?n.slice(0,c.index):n,u=[];if(s){if(!r.plainObjects&&a.call(Object.prototype,s)&&!r.allowPrototypes)return;u.push(s)}var d=0;while(null!==(c=i.exec(n))&&d<r.depth){if(d+=1,!r.plainObjects&&a.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+n.slice(c.index)+"]"),l(u,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"===typeof r.depth?r.depth:o.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var a="string"===typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},s=Object.keys(a),u=0;u<s.length;++u){var d=s[u],p=c(d,a[d],r);l=n.merge(l,p,r)}return n.compact(l)}},a169:function(e,t,r){"use strict";var n=r("0c6d"),a={getKindList:function(e){return Object(n["a"])({url:"/api/leju/admin/kind/list",data:e})},saveOrUpdateKind:function(e){return Object(n["a"])({url:"/api/leju/admin/kind/saveOrUpdate",method:"post",data:e})},delKind:function(e){return Object(n["a"])({url:"/api/leju/admin/kind/del",data:e})}};t["a"]=a},b313:function(e,t,r){"use strict";var n=String.prototype.replace,a=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c4c8:function(e,t,r){"use strict";var n=r("0c6d"),a={getProductList:function(e){return Object(n["a"])({url:"/api/leju/admin/product/list",data:e})},switchCode:function(e){return Object(n["a"])({url:"/api/leju/admin/product/switchCode",data:e})},delProduct:function(e){return Object(n["a"])({url:"/api/leju/admin/product/delete",data:e})},getProductDetail:function(e){return Object(n["a"])({url:"/api/leju/admin/product/detail",data:e})},saveOrUpdateProduct:function(e){return Object(n["a"])({url:"/api/leju/admin/product/saveOrUpdate",method:"post",data:e})}};t["a"]=a},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],a=0;a<t.length;++a)"undefined"!==typeof t[a]&&n.push(t[a]);r.obj[r.prop]=n}}return t},i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},l=function e(t,r,a){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(a.plainObjects||a.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var o=t;return Array.isArray(t)&&!Array.isArray(r)&&(o=i(t,a)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,o){n.call(t,o)?t[o]&&"object"===typeof t[o]?t[o]=e(t[o],r,a):t.push(r):t[o]=r})),t):Object.keys(r).reduce((function(t,o){var i=r[o];return n.call(t,o)?t[o]=e(t[o],i,a):t[o]=i,t}),o)},c=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},s=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",n=0;n<t.length;++n){var o=t.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(n):o<128?r+=a[o]:o<2048?r+=a[192|o>>6]+a[128|63&o]:o<55296||o>=57344?r+=a[224|o>>12]+a[128|o>>6&63]+a[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(n)),r+=a[240|o>>18]+a[128|o>>12&63]+a[128|o>>6&63]+a[128|63&o])}return r},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var a=t[n],i=a.obj[a.prop],l=Object.keys(i),c=0;c<l.length;++c){var s=l[c],u=i[s];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:s}),r.push(u))}return o(t)},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},f=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:c,compact:d,decode:s,encode:u,isBuffer:f,isRegExp:p,merge:l}},e6e2:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"product-main"},[r("el-card",{staticStyle:{margin:"30px"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[e._v("查询条件")])]),r("el-row",{attrs:{gutter:30}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入商品名"},model:{value:e.searchOpt.gname,callback:function(t){e.$set(e.searchOpt,"gname",t)},expression:"searchOpt.gname"}})],1),r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入商品编码"},model:{value:e.searchOpt.pcode,callback:function(t){e.$set(e.searchOpt,"pcode",t)},expression:"searchOpt.pcode"}})],1),r("el-col",{attrs:{span:6}},[r("el-select",{attrs:{placeholder:"请选择商品品牌"},model:{value:e.searchOpt.brandId,callback:function(t){e.$set(e.searchOpt,"brandId",t)},expression:"searchOpt.brandId"}},e._l(e.brandList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-col",{attrs:{span:6}},[r("el-select",{attrs:{placeholder:"请选择商品分类"},model:{value:e.searchOpt.kindId,callback:function(t){e.$set(e.searchOpt,"kindId",t)},expression:"searchOpt.kindId"}},e._l(e.kindList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-row",{staticStyle:{"margin-top":"30px"},attrs:{gutter:30}},[r("el-col",{attrs:{span:6,offset:18}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.queryHandler}},[e._v("查询")]),r("el-button",{attrs:{size:"small"},on:{click:e.resetHandler}},[e._v("重置")])],1)],1)],1),r("el-card",{staticStyle:{margin:"30px"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("el-button",{attrs:{type:"success"},on:{click:e.addHandler}},[e._v("添加商品")])],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.productlist,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"#",type:"index",width:"50"}}),r("el-table-column",{attrs:{label:"商品图片",align:"center",width:"170"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("div",[r("img",{staticStyle:{width:"80px",height:"80px","vertical-align":"bottom"},attrs:{src:e.row.cover_img,alt:""}})])]}}])}),r("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("p",[e._v(e._s(t.row.gname))]),r("p",[e._v("品牌: "+e._s(t.row.brandName)+" | "+e._s(t.row.brandEname))]),r("p",[e._v(e._s(t.row.ctitles))])])]}}])}),r("el-table-column",{attrs:{label:"商品标签",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("el-row",[e._v(" 最热:"),r("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(r){return e.switchChanged(r,t.row.id,"ishot")}},model:{value:t.row.ishot,callback:function(r){e.$set(t.row,"ishot",r)},expression:"scope.row.ishot"}})],1),r("el-row",[e._v(" 上架:"),r("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(r){return e.switchChanged(r,t.row.id,"isshow")}},model:{value:t.row.isshow,callback:function(r){e.$set(t.row,"isshow",r)},expression:"scope.row.isshow"}})],1),r("el-row",[e._v(" 最新:"),r("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(r){return e.switchChanged(r,t.row.id,"isnew")}},model:{value:t.row.isnew,callback:function(r){e.$set(t.row,"isnew",r)},expression:"scope.row.isnew"}})],1)],1)]}}])}),r("el-table-column",{attrs:{label:"价格货号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("p",[e._v("价格:💴"+e._s(t.row.price_now/100))]),r("p",[e._v("货号:"+e._s(t.row.pcode))])])]}}])}),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.editHandler(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return e.delHandler(t.row.id)}}},[e._v("删除")])],1)]}}])})],1),r("el-pagination",{staticStyle:{"text-align":"center","margin-top":"10px"},attrs:{"current-page":e.pageOpt.start,"page-sizes":e.pageSizes,"page-size":e.pageOpt.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum,background:""},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)],1)},a=[],o=(r("4160"),r("159b"),r("96cf"),r("1da1")),i=r("5530"),l=r("ade3"),c=r("c4c8"),s=r("9add"),u=r("a169"),d={name:"Product",data:function(){return{searchOpt:{},pageOpt:{start:1,limit:10},pageSizes:[10,20,30],totalNum:0,productlist:[],loading:!1,brandList:[],kindList:[]}},created:function(){this.getProductList(),this.getBrandList(),this.getKindList()},methods:{switchChanged:function(e,t,r){console.log(e,t);var n=Object(l["a"])({id:t},r,e);this.switchRequest(n)},sizeChange:function(e){this.pageOpt.limit=e,this.getProductList()},currentChange:function(e){this.pageOpt.start=e,this.getProductList()},editHandler:function(e){this.$router.push("/product/edit/"+e)},delHandler:function(e){var t=this;this.$confirm("真的要删除吗?","Tips").then((function(){c["a"].delProduct({id:e}).then((function(e){"success"===e.code?(t.$message.success("删除成功"),t.getProductList()):t.$message.error("删除失败")}))})).catch((function(){t.$message.info("已取消删除")}))},addHandler:function(){this.$router.push({name:"ProductAdd"})},queryHandler:function(){this.pageOpt={start:1,limit:10};var e=Object(i["a"])(Object(i["a"])({},this.pageOpt),this.searchOpt);this.getProductList(e)},resetHandler:function(){this.pageOpt={start:1,limit:10},this.searchOpt={},this.getProductList()},switchRequest:function(e){c["a"].switchCode(e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},getProductList:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,n=e||t.pageOpt,r.next=4,c["a"].getProductList(n).catch((function(){t.$message.error("加载失败，请重试"),t.loading=!1}));case 4:a=r.sent,o=a.data,t.loading=!1,t.totalNum=o.totalRow,t.productlist=o.list,console.log(o);case 10:case"end":return r.stop()}}),r)})))()},getBrandList:function(){var e=this;s["a"].getAllBrandList().then((function(t){var r=t.data;console.log(r),r.forEach((function(t){e.brandList.push({value:t.id,label:t.cname})}))}))},getKindList:function(){var e=this;u["a"].getKindList().then((function(t){var r=t.data;r.forEach((function(t){e.kindList.push({value:t.id,label:t.ctitle})}))}))}}},p=d,f=r("2877"),h=Object(f["a"])(p,n,a,!1,null,null,null);t["default"]=h.exports}}]);