(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-250d16f8"],{2864:function(e,a,t){},2966:function(e,a,t){"use strict";var n=t("2864"),i=t.n(n);i.a},bac2:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"page-pagination"},[e._m(0),t("p",[e._v("当数据量过多时，使用分页分解数据。")]),e._m(1),t("p",[e._v("基础的树形结构展示。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-pagination"},[t("div",{staticClass:"source"},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("页数较少时的效果")]),t("el-pagination",{attrs:{layout:"prev, pager, next",total:50}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("大于 7 页时的效果")]),t("el-pagination",{attrs:{layout:"prev, pager, next",total:1e3}})],1)])]),e._m(2),t("div",{staticClass:"demo-block demo-zh-CN demo-pagination"},[t("div",{staticClass:"source"},[t("el-pagination",{attrs:{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3}})],1)]),e._m(3),t("div",{staticClass:"demo-block demo-zh-CN demo-pagination"},[t("div",{staticClass:"source"},[t("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)]),e._m(4),t("p",[e._v("在空间有限的情况下，可以使用简单的小型分页。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-pagination"},[t("div",{staticClass:"source"},[t("el-pagination",{attrs:{small:"",layout:"prev, pager, next",total:50}})],1)]),e._m(5),t("p",[e._v("根据场景需要，可以添加其他功能模块。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-pagination"},[t("div",{staticClass:"source"},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("显示总数")]),t("el-pagination",{attrs:{"current-page":e.currentPage1,"page-size":100,layout:"total, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage1=a},"update:current-page":function(a){e.currentPage1=a}}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("调整每页显示条数")]),t("el-pagination",{attrs:{"current-page":e.currentPage2,"page-sizes":[100,200,300,400],"page-size":100,layout:"sizes, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage2=a},"update:current-page":function(a){e.currentPage2=a}}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("直接前往")]),t("el-pagination",{attrs:{"current-page":e.currentPage3,"page-size":100,layout:"prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage3=a},"update:current-page":function(a){e.currentPage3=a}}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("完整功能")]),t("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._m(6),t("p",[e._v("当只有一页时，通过设置 hide-on-single-page 属性来隐藏分页。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-pagination"},[t("div",{staticClass:"source"},[t("div",[t("el-switch",{model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),t("el-pagination",{attrs:{"hide-on-single-page":e.value,total:5,layout:"prev, pager, next"}})],1)])])])},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{attrs:{id:"pagination-fen-ye"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pagination-fen-ye","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    Pagination 分页\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"ji-chu-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    基础用法\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"she-zhi-zui-da-ye-ma-an-niu-shu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#she-zhi-zui-da-ye-ma-an-niu-shu","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    设置最大页码按钮数\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"dai-you-bei-jing-se-de-fen-ye"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dai-you-bei-jing-se-de-fen-ye","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    带有背景色的分页\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"xiao-xing-fen-ye"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xiao-xing-fen-ye","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    小型分页\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"fu-jia-gong-neng"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fu-jia-gong-neng","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    附加功能\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"dang-zhi-you-yi-ye-shi-yin-cang-fen-ye"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dang-zhi-you-yi-ye-shi-yin-cang-fen-ye","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    当只有一页时隐藏分页\n  ")])}],r={name:"pagination",data:function(){return{currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,value:!1}},methods:{handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))}}},s=r,o=(t("2966"),t("2877")),c=Object(o["a"])(s,n,i,!1,null,"07b7aed4",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-250d16f8.4c9d4824.js.map