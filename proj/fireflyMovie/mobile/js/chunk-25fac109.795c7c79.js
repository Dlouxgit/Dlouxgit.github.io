(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25fac109"],{"5b98":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"conter"},[s("ul",{staticStyle:{"margin-top":"1.826667rem","margin-bottom":"2.48rem"}},t._l(t.list,(function(a){return s("router-link",{key:a.id,attrs:{tag:"li",to:"/detail/"+a.mId}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:a.small,alt:""}})]),s("div",{staticClass:"right"},[s("p",[t._v(t._s(a.title)+" ("+t._s(a.year)+")")]),s("p",[t._v("萤火虫评分 9.9")]),s("p",[t._v("导演:"+t._s(a.director[0]))]),s("p",[t._v("主演:"+t._s(a.director[0]))])]),s("div",{staticClass:"last"},[s("span",[t._v("购票")])])])})),1)])},i=[],n=s("bc3a"),r=s.n(n),c={data:function(){return{list:[]}},methods:{},created:function(){var t=this;this.$store.state.currentPage=this.$router.currentRoute.fullPath,r.a.get("http://bufantec.com/api/douban/movie/in_theaters").then((function(a){t.list=a.data.data.list,console.log(t.list)}))}},l=c,o=(s("7537"),s("2877")),u=Object(o["a"])(l,e,i,!1,null,"404b51e3",null);a["default"]=u.exports},7537:function(t,a,s){"use strict";var e=s("dba1"),i=s.n(e);i.a},dba1:function(t,a,s){}}]);
//# sourceMappingURL=chunk-25fac109.795c7c79.js.map