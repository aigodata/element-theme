(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-114bf63c"],{"1fd3":function(e,a,t){},"4dab":function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",function(){return n})},"74f9":function(e,a,t){"use strict";var n=t("1fd3"),i=t.n(n);i.a},eaeb:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"page-loading"},[e._m(0),t("p",[e._v("加载数据时显示动效。")]),e._m(1),t("p",[e._v("在表格等容器中加载数据时显示。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-loading"},[t("div",{staticClass:"source"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)]),e._m(2),t("p",[e._v("可自定义加载文案、图标和背景色。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-loading"},[t("div",{staticClass:"source"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading2,expression:"loading2"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData}},[t("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)]),e._m(3),t("p",[e._v("页面数据加载时显示。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-loading"},[t("div",{staticClass:"source"},[t("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.openFullScreen}},[e._v("\n        指令方式\n      ")]),t("el-button",{attrs:{type:"primary"},on:{click:e.openFullScreen2}},[e._v("\n        服务方式\n      ")])],1)])])},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{attrs:{id:"loading-jia-zai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loading-jia-zai","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    Loading 加载\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"qu-yu-jia-zai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qu-yu-jia-zai","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    区域加载\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"zi-ding-yi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    自定义\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"zheng-ye-jia-zai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zheng-ye-jia-zai","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    整页加载\n  ")])}],l=t("4dab"),r={name:"loading",data:function(){var e;return e={tableData:[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],loading:!0},Object(l["a"])(e,"tableData",[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}]),Object(l["a"])(e,"loading2",!0),Object(l["a"])(e,"fullscreenLoading",!1),e},methods:{openFullScreen:function(){var e=this;this.fullscreenLoading=!0,setTimeout(function(){e.fullscreenLoading=!1},2e3)},openFullScreen2:function(){var e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(function(){e.close()},2e3)}}},s=r,d=(t("74f9"),t("17cc")),o=Object(d["a"])(s,n,i,!1,null,"51759625",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-114bf63c.7c361cbb.js.map