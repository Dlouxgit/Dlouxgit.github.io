(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e88bd222"],{"0c6d":function(e,t,r){"use strict";r("d3b7");var i=r("bc3a"),n=r.n(i),o=r("5c96"),a=r("4328"),s=r.n(a),l=n.a.create({baseURL:"https://bufan.cloud",timeout:5e3});function c(e){var t,r={};return r.url=e.url,"post"===(null===(t=e.method)||void 0===t?void 0:t.toLowerCase())?(r.method="post",r.headers={},r.headers["Content-Type"]="application/x-www-form-urlencoded",r.data=s.a.stringify(e.data,{allowDots:!0,arrayFormat:"repeat"})):r.params=e.data,l(r)}l.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),l.interceptors.response.use((function(e){var t=e.data;return t}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=c},1552:function(e,t,r){},4127:function(e,t,r){"use strict";var i=r("d233"),n=r("b313"),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,n,o,a,l,c,d,u,p,f,m){var g=t;if("function"===typeof c)g=c(r,g);else if(g instanceof Date)g=p(g);else if(null===g){if(o)return l&&!m?l(r,s.encoder):r;g=""}if("string"===typeof g||"number"===typeof g||"boolean"===typeof g||i.isBuffer(g)){if(l){var y=m?r:l(r,s.encoder);return[f(y)+"="+f(l(g,s.encoder))]}return[f(r)+"="+f(String(g))]}var b,h=[];if("undefined"===typeof g)return h;if(Array.isArray(c))b=c;else{var v=Object.keys(g);b=d?v.sort(d):v}for(var O=0;O<b.length;++O){var j=b[O];a&&null===g[j]||(h=Array.isArray(g)?h.concat(e(g[j],n(r,j),n,o,a,l,c,d,u,p,f,m)):h.concat(e(g[j],r+(u?"."+j:"["+j+"]"),n,o,a,l,c,d,u,p,f,m)))}return h};e.exports=function(e,t){var r=e,a=t?i.assign({},t):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!==typeof a.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof a.delimiter?s.delimiter:a.delimiter,d="boolean"===typeof a.strictNullHandling?a.strictNullHandling:s.strictNullHandling,u="boolean"===typeof a.skipNulls?a.skipNulls:s.skipNulls,p="boolean"===typeof a.encode?a.encode:s.encode,f="function"===typeof a.encoder?a.encoder:s.encoder,m="function"===typeof a.sort?a.sort:null,g="undefined"!==typeof a.allowDots&&a.allowDots,y="function"===typeof a.serializeDate?a.serializeDate:s.serializeDate,b="boolean"===typeof a.encodeValuesOnly?a.encodeValuesOnly:s.encodeValuesOnly;if("undefined"===typeof a.format)a.format=n["default"];else if(!Object.prototype.hasOwnProperty.call(n.formatters,a.format))throw new TypeError("Unknown format option provided.");var h,v,O=n.formatters[a.format];"function"===typeof a.filter?(v=a.filter,r=v("",r)):Array.isArray(a.filter)&&(v=a.filter,h=v);var j,L=[];if("object"!==typeof r||null===r)return"";j=a.arrayFormat in o?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var w=o[j];h||(h=Object.keys(r)),m&&h.sort(m);for(var S=0;S<h.length;++S){var x=h[S];u&&null===r[x]||(L=L.concat(l(r[x],x,w,d,u,p?f:null,v,m,g,y,O,b)))}var _=L.join(c),A=!0===a.addQueryPrefix?"?":"";return _.length>0?A+_:""}},4328:function(e,t,r){"use strict";var i=r("4127"),n=r("9e6a"),o=r("b313");e.exports={formats:o,parse:n,stringify:i}},"7d09":function(e,t,r){"use strict";var i=r("0c6d"),n={getAllSeriesList:function(e){return Object(i["a"])({url:"/api/leju/admin/series/allList",data:e})},delSeries:function(e){return Object(i["a"])({url:"/api/leju/admin/series/del",data:e})},saveOrUpdateSeries:function(e){return Object(i["a"])({url:"/api/leju/admin/series/saveOrUpdate",method:"post",data:e})}};t["a"]=n},"9e6a":function(e,t,r){"use strict";var i=r("d233"),n=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var r={},i=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,s=i.split(t.delimiter,a),l=0;l<s.length;++l){var c,d,u=s[l],p=u.indexOf("]="),f=-1===p?u.indexOf("="):p+1;-1===f?(c=t.decoder(u,o.decoder),d=t.strictNullHandling?null:""):(c=t.decoder(u.slice(0,f),o.decoder),d=t.decoder(u.slice(f+1),o.decoder)),n.call(r,c)?r[c]=[].concat(r[c]).concat(d):r[c]=d}return r},s=function(e,t,r){for(var i=t,n=e.length-1;n>=0;--n){var o,a=e[n];if("[]"===a)o=[],o=o.concat(i);else{o=r.plainObjects?Object.create(null):{};var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,l=parseInt(s,10);!isNaN(l)&&a!==s&&String(l)===s&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(o=[],o[l]=i):o[s]=i}i=o}return i},l=function(e,t,r){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(i),c=l?i.slice(0,l.index):i,d=[];if(c){if(!r.plainObjects&&n.call(Object.prototype,c)&&!r.allowPrototypes)return;d.push(c)}var u=0;while(null!==(l=a.exec(i))&&u<r.depth){if(u+=1,!r.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+i.slice(l.index)+"]"),s(d,t,r)}};e.exports=function(e,t){var r=t?i.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||i.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"===typeof r.depth?r.depth:o.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var n="string"===typeof e?a(e,r):e,s=r.plainObjects?Object.create(null):{},c=Object.keys(n),d=0;d<c.length;++d){var u=c[d],p=l(u,n[u],r);s=i.merge(s,p,r)}return i.compact(s)}},b313:function(e,t,r){"use strict";var i=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return i.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var i=[],n=0;n<t.length;++n)"undefined"!==typeof t[n]&&i.push(t[n]);r.obj[r.prop]=i}}return t},a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)"undefined"!==typeof e[i]&&(r[i]=e[i]);return r},s=function e(t,r,n){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(n.plainObjects||n.allowPrototypes||!i.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var o=t;return Array.isArray(t)&&!Array.isArray(r)&&(o=a(t,n)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,o){i.call(t,o)?t[o]&&"object"===typeof t[o]?t[o]=e(t[o],r,n):t.push(r):t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return i.call(t,o)?t[o]=e(t[o],a,n):t[o]=a,t}),o)},l=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},d=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",i=0;i<t.length;++i){var o=t.charCodeAt(i);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(i):o<128?r+=n[o]:o<2048?r+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?r+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(i+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),r+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return r},u=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var n=t[i],a=n.obj[n.prop],s=Object.keys(a),l=0;l<s.length;++l){var c=s[l],d=a[c];"object"===typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:a,prop:c}),r.push(d))}return o(t)},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},f=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:a,assign:l,compact:u,decode:c,encode:d,isBuffer:f,isRegExp:p,merge:s}},e3e5:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"series-index-main"},[r("el-card",{staticStyle:{margin:"30px"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("el-button",{attrs:{type:"success"},on:{click:e.addHandler}},[e._v("添加")])],1),r("el-table",{attrs:{data:e.seriesList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"#",align:"center"}}),e._l(e.seriesMap,(function(t,i){return r("el-table-column",{key:i,attrs:{prop:t.prop,label:t.label,align:"center"},scopedSlots:e._u(["bg_img"===t.prop||"cover_img"===t.prop?{key:"default",fn:function(e){return[r("div",[r("img",{staticStyle:{width:"100px",height:"100px","vertical-align":"bottom"},attrs:{src:e.row[t.prop],alt:""}})])]}}:null],null,!0)})})),r("el-table-column",{attrs:{label:"操作",align:"center",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(r){return e.editHandler(t.$index)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(r){return e.delHandler(t.row.id)}}},[e._v("删除")])]}}])})],2)],1),r("el-dialog",{attrs:{title:e.addnEditOpt.id?"编辑":"添加",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.dialogClose}},[r("el-form",{ref:"addnEditFormRef",attrs:{model:e.addnEditOpt,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"中文名称"}},[r("el-input",{model:{value:e.addnEditOpt.cname,callback:function(t){e.$set(e.addnEditOpt,"cname",t)},expression:"addnEditOpt.cname"}})],1),r("el-form-item",{attrs:{label:"英文名称"}},[r("el-input",{model:{value:e.addnEditOpt.ename,callback:function(t){e.$set(e.addnEditOpt,"ename",t)},expression:"addnEditOpt.ename"}})],1),r("el-form-item",{attrs:{label:"品牌描述"}},[r("el-input",{model:{value:e.addnEditOpt.descr,callback:function(t){e.$set(e.addnEditOpt,"descr",t)},expression:"addnEditOpt.descr"}})],1),r("el-form-item",{attrs:{label:"封面小图"}},[r("el-upload",{attrs:{action:"/api/leju/admin/material/uploadAndSaveImg",limit:1,"file-list":e.fileList,"on-success":e.imgSuccessHandler,"on-remove":e.imgRemoveHandler}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("img",{staticStyle:{width:"100px",height:"100px","vertial-align":"bottom"},attrs:{src:e.imgSrc,alt:""}})])],1)],1),r("el-form-item",{attrs:{label:"封面大图"}},[r("el-upload",{attrs:{action:"/api/leju/admin/material/uploadAndSaveImg",limit:1,"file-list":e.fileList2,"on-success":e.imgSuccessHandler2,"on-remove":e.imgRemoveHandler2}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("img",{staticStyle:{width:"100px",height:"100px","vertial-align":"bottom"},attrs:{src:e.imgSrc2,alt:""}})])],1)],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmClicked}},[e._v("确 定")])],1)],1)],1)},n=[],o=(r("d3b7"),r("7d09")),a={name:"SeriesIndex",components:{},data:function(){return{seriesList:[],seriesMap:[{label:"添加时间",prop:"addTime"},{label:"封面小图",prop:"bg_img"},{label:"中文名称",prop:"cname"},{label:"英文名称",prop:"ename"},{label:"封面大图",prop:"cover_img"},{label:"系列描述",prop:"descr"}],dialogVisible:!1,fileList:[],imgSrc:"",fileList2:[],imgSrc2:"",addnEditOpt:{},throttle:!0}},created:function(){this.getAllSeriesList()},methods:{addHandler:function(){this.dialogVisible=!0},editHandler:function(e){this.dialogVisible=!0,this.addnEditOpt={cname:this.seriesList[e].cname,bg_img:this.seriesList[e].bg_img,cover_img:this.seriesList[e].cover_img,descr:this.seriesList[e].descr,ename:this.seriesList[e].ename,id:this.seriesList[e].id},this.imgSrc=this.seriesList[e].cover_img?this.seriesList[e].cover_img:"",this.fileList=this.seriesList[e].cover_img?[{name:"1.jpg",url:this.seriesList[e].cover_img}]:[],this.imgSrc2=this.seriesList[e].bg_img?this.seriesList[e].bg_img:"",this.fileList2=this.seriesList[e].bg_img?[{name:"2.jpg",url:this.seriesList[e].bg_img}]:[]},delHandler:function(e){var t=this;this.$confirm("真的要删除吗?","Tips").then((function(){t.delSeries(e)})).catch((function(){return t.$message.info("取消了删除")}))},confirmClicked:function(){this.throttle?this.saveOrUpdateSeries():this.$message.info("正在等待网络······")},imgSuccessHandler:function(e){this.imgSrc=e.ossUrl,this.addnEditOpt.cover_img=e.ossUrl},imgSuccessHandler2:function(e){this.imgSrc2=e.ossUrl,this.addnEditOpt.bg_img=e.ossUrl},imgRemoveHandler:function(e,t){this.imgSrc="",this.fileList=t,this.addnEditOpt.cover_img=""},imgRemoveHandler2:function(e,t){this.imgSrc2="",this.fileList2=t,this.addnEditOpt.bg_img=""},dialogClose:function(){this.addnEditOpt={},this.imgSrc="",this.fileList=[],this.imgSrc2="",this.fileList2=[]},getAllSeriesList:function(){var e=this;o["a"].getAllSeriesList().then((function(t){var r=t.data;e.seriesList=r})).finally((function(){e.throttle=!0}))},delSeries:function(e){var t=this;o["a"].delSeries({id:e}).then((function(e){t.$message.success("删除成功"),t.getAllSeriesList()})).catch((function(){return t.$message.error("删除失败")}))},saveOrUpdateSeries:function(){var e=this;this.throttle=!1,o["a"].saveOrUpdateSeries(this.addnEditOpt).then((function(t){e.getAllSeriesList(),e.$message.success(e.addnEditOpt.id?"更新成功":"添加成功"),e.dialogVisible=!1}))}}},s=a,l=(r("ebf9f"),r("2877")),c=Object(l["a"])(s,i,n,!1,null,"3868846c",null);t["default"]=c.exports},ebf9f:function(e,t,r){"use strict";var i=r("1552"),n=r.n(i);n.a}}]);