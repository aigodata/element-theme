(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7fe072a"],{"0a09":function(e,t,s){},"5c0d":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"page-message-box"},[e._m(0),s("p",[e._v("模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。")]),e._m(1),s("p",[e._v("当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message-box"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{type:"text"},on:{click:e.open}},[e._v("点击打开 Message Box")])],1)]),e._m(2),s("p",[e._v("提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message-box"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{type:"text"},on:{click:e.open2}},[e._v("点击打开 Message Box")])],1)]),e._m(3),s("p",[e._v("当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message-box"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{type:"text"},on:{click:e.open3}},[e._v("点击打开 Message Box")])],1)]),e._m(4),s("p",[e._v("可自定义配置不同内容。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message-box"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{type:"text"},on:{click:e.open4}},[e._v("点击打开 Message Box")])],1)]),e._m(5),s("p",[e._v("message 属性支持传入 HTML 片段。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message-box"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{type:"text"},on:{click:e.open5}},[e._v("点击打开 Message Box")])],1)]),e._m(6),s("p",[e._v("有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message-box"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{type:"text"},on:{click:e.open6}},[e._v("点击打开 Message Box")])],1)]),e._m(7),s("p",[e._v("内容支持居中布局")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message-box"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{type:"text"},on:{click:e.open7}},[e._v("点击打开 Message Box")])],1)])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",{attrs:{id:"messagebox-dan-kuang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messagebox-dan-kuang","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    MessageBox 弹框\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"xiao-xi-ti-shi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xiao-xi-ti-shi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    消息提示\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"que-ren-xiao-xi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#que-ren-xiao-xi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    确认消息\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"ti-jiao-nei-rong"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ti-jiao-nei-rong","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    提交内容\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"zi-ding-yi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    自定义\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"shi-yong-html-pian-duan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-html-pian-duan","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    使用 HTML 片段\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"qu-fen-qu-xiao-yu-guan-bi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qu-fen-qu-xiao-yu-guan-bi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    区分取消与关闭\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"ju-zhong-bu-ju"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ju-zhong-bu-ju","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    居中布局\n  ")])}],i={name:"message-box",data:function(){return{}},methods:{open:function(){var e=this;this.$alert("这是一段内容","标题名称",{confirmButtonText:"确定",callback:function(t){e.$message({type:"info",message:"action: ".concat(t)})}})},open2:function(){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},open3:function(){var e=this;this.$prompt("请输入邮箱","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/[\w!#$%&'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"邮箱格式不正确"}).then(function(t){var s=t.value;e.$message({type:"success",message:"你的邮箱是: "+s})}).catch(function(){e.$message({type:"info",message:"取消输入"})})},open4:function(){var e=this,t=this.$createElement;this.$msgbox({title:"消息",message:t("p",null,[t("span",null,"内容可以是 "),t("i",{style:"color: teal"},"VNode")]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(e,t,s){"confirm"===e?(t.confirmButtonLoading=!0,t.confirmButtonText="执行中...",setTimeout(function(){s(),setTimeout(function(){t.confirmButtonLoading=!1},300)},3e3)):s()}}).then(function(t){e.$message({type:"info",message:"action: "+t})})},open5:function(){this.$alert("<strong>这是 <i>HTML</i> 片段</strong>","HTML 片段",{dangerouslyUseHTMLString:!0})},open6:function(){var e=this;this.$confirm("检测到未保存的内容，是否在离开页面前保存修改？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"保存",cancelButtonText:"放弃修改"}).then(function(){e.$message({type:"info",message:"保存修改"})}).catch(function(t){e.$message({type:"info",message:"cancel"===t?"放弃保存并离开页面":"停留在当前页面"})})},open7:function(){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}},o=i,c=(s("a9ca"),s("17cc")),r=Object(c["a"])(o,n,a,!1,null,"4c3da754",null);t["default"]=r.exports},a9ca:function(e,t,s){"use strict";var n=s("0a09"),a=s.n(n);a.a}}]);
//# sourceMappingURL=chunk-e7fe072a.6d7fc367.js.map