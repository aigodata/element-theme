(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1bd43ba"],{"120a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"page-dialog"},[t._m(0),i("p",[t._v("在保留当前页面状态的情况下，告知用户并承载相关操作。")]),t._m(1),i("p",[t._v("Dialog 弹出一个对话框，适合需要定制性更大的场景。")]),i("div",{staticClass:"demo-block demo-zh-CN demo-dialog"},[i("div",{staticClass:"source"},[i("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("点击打开 Dialog")]),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("span",[t._v("这是一段信息")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)]),t._m(2),i("p",[t._v("Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。")]),i("div",{staticClass:"demo-block demo-zh-CN demo-dialog"},[i("div",{staticClass:"source"},[i("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("打开嵌套表格的 Dialog")]),i("el-dialog",{attrs:{title:"收货地址",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[i("el-table",{attrs:{data:t.gridData}},[i("el-table-column",{attrs:{property:"date",label:"日期",width:"150"}}),i("el-table-column",{attrs:{property:"name",label:"姓名",width:"200"}}),i("el-table-column",{attrs:{property:"address",label:"地址"}})],1)],1),i("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("打开嵌套表单的 Dialog")]),i("el-dialog",{attrs:{title:"收货地址",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"活动名称","label-width":t.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"活动区域","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[i("el-option",{attrs:{label:"区域一",value:"shanghai"}}),i("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1)]),t._m(3),i("p",[t._v("如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。")]),i("div",{staticClass:"demo-block demo-zh-CN demo-dialog"},[i("div",{staticClass:"source"},[i("el-button",{attrs:{type:"text"},on:{click:function(e){t.outerVisible=!0}}},[t._v("点击打开外层 Dialog")]),i("el-dialog",{attrs:{title:"外层 Dialog",visible:t.outerVisible},on:{"update:visible":function(e){t.outerVisible=e}}},[i("el-dialog",{attrs:{width:"30%",title:"内层 Dialog",visible:t.innerVisible,"append-to-body":""},on:{"update:visible":function(e){t.innerVisible=e}}}),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.outerVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.innerVisible=!0}}},[t._v("打开内层 Dialog")])],1)],1)],1)]),t._m(4),i("p",[t._v("标题和底部可水平居中")]),i("div",{staticClass:"demo-block demo-zh-CN demo-dialog"},[i("div",{staticClass:"source"},[i("el-button",{attrs:{type:"text"},on:{click:function(e){t.centerDialogVisible=!0}}},[t._v("点击打开 Dialog")]),i("el-dialog",{attrs:{title:"提示",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[i("span",[t._v("需要注意的是内容是默认不居中的")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("确 定")])],1)])],1)]),t._m(5),i("p",[t._v("标题和底部可水平居中")]),i("div",{staticClass:"demo-block demo-zh-CN demo-dialog"},[i("div",{staticClass:"source"},[i("el-button",{attrs:{type:"text"},on:{click:function(e){t.isfullscreenDialogVisible=!0}}},[t._v("点击打开 Dialog")]),i("el-dialog",{attrs:{title:"提示",fullscreen:t.isfullscreen,visible:t.isfullscreenDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.isfullscreenDialogVisible=e}}},[i("span",[t._v("需要注意的是内容是默认不居中的")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.isfullscreenDialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isfullscreenDialogVisible=!1}}},[t._v("确 定")])],1)])],1)])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{attrs:{id:"dialog-dui-hua-kuang"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dialog-dui-hua-kuang","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    Dialog 对话框\n  ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{attrs:{id:"ji-ben-yong-fa"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    基本用法\n  ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{attrs:{id:"zi-ding-yi-nei-rong"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-nei-rong","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    自定义内容\n  ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{attrs:{id:"qian-tao-de-dialog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#qian-tao-de-dialog","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    嵌套的 Dialog\n  ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{attrs:{id:"ju-zhong-bu-ju"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ju-zhong-bu-ju","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    居中布局\n  ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{attrs:{id:"quan-ping-dialog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#quan-ping-dialog","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    全屏 Dialog\n  ")])}],o={name:"dialog",data:function(){return{dialogVisible:!1,gridData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],dialogTableVisible:!1,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px",outerVisible:!1,innerVisible:!1,centerDialogVisible:!1,isfullscreenDialogVisible:!1,isfullscreen:!0}},methods:{handleClose:function(t){this.$confirm("确认关闭？").then(function(){t()}).catch(function(t){})}}},s=o,n=(i("23a7"),i("2877")),r=Object(n["a"])(s,a,l,!1,null,"66e31ac8",null);e["default"]=r.exports},"23a7":function(t,e,i){"use strict";var a=i("2d3d"),l=i.n(a);l.a},"2d3d":function(t,e,i){}}]);
//# sourceMappingURL=chunk-e1bd43ba.d57720f2.js.map