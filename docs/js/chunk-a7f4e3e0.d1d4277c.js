(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7f4e3e0"],{6500:function(e,t,s){},b558:function(e,t,s){"use strict";var n=s("6500"),a=s.n(n);a.a},bf20:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"page-message"},[e._m(0),s("p",[e._v("常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。")]),e._m(1),s("p",[e._v("从顶部出现，3 秒后自动消失。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{plain:!0},on:{click:e.open}},[e._v("打开消息提示")]),s("el-button",{attrs:{plain:!0},on:{click:e.openVn}},[e._v("VNode")])],1)]),e._m(2),s("p",[e._v("用来显示「成功、警告、消息、错误」类的操作反馈。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{plain:!0},on:{click:e.open2}},[e._v("成功")]),s("el-button",{attrs:{plain:!0},on:{click:e.open3}},[e._v("警告")]),s("el-button",{attrs:{plain:!0},on:{click:e.open}},[e._v("消息")]),s("el-button",{attrs:{plain:!0},on:{click:e.open4}},[e._v("错误")])],1)]),e._m(3),s("p",[e._v("可以添加关闭按钮。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{plain:!0},on:{click:e.open5}},[e._v("消息")]),s("el-button",{attrs:{plain:!0},on:{click:e.open6}},[e._v("成功")]),s("el-button",{attrs:{plain:!0},on:{click:e.open7}},[e._v("警告")]),s("el-button",{attrs:{plain:!0},on:{click:e.open8}},[e._v("错误")])],1)]),e._m(4),s("p",[e._v("使用 center 属性让文字水平居中。")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{plain:!0},on:{click:e.openCenter}},[e._v("文字居中")])],1)]),e._m(5),s("p",[e._v("message 属性支持传入 HTML 片段")]),s("div",{staticClass:"demo-block demo-zh-CN demo-message"},[s("div",{staticClass:"source"},[s("el-button",{attrs:{plain:!0},on:{click:e.openHTML}},[e._v("使用 HTML 片段")])],1)])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",{attrs:{id:"message-xiao-xi-ti-shi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-xiao-xi-ti-shi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    Message 消息提示\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"ji-chu-yong-fa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    基础用法\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"bu-tong-zhuang-tai"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-zhuang-tai","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    不同状态\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"ke-guan-bi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ke-guan-bi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    可关闭\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"wen-zi-ju-zhong"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wen-zi-ju-zhong","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    文字居中\n  ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{attrs:{id:"shi-yong-html-pian-duan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-html-pian-duan","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    使用 HTML 片段\n  ")])}],i={name:"message",data:function(){return{}},methods:{open:function(){this.$message("这是一条消息提示")},openVn:function(){var e=this.$createElement;this.$message({message:e("p",null,[e("span",null,"内容可以是 "),e("i",{style:"color: teal"},"VNode")])})},open2:function(){this.$message({message:"恭喜你，这是一条成功消息",type:"success"})},open3:function(){this.$message({message:"警告哦，这是一条警告消息",type:"warning"})},open4:function(){this.$message.error("错了哦，这是一条错误消息")},open5:function(){this.$message({showClose:!0,message:"这是一条消息提示"})},open6:function(){this.$message({showClose:!0,message:"恭喜你，这是一条成功消息",type:"success"})},open7:function(){this.$message({showClose:!0,message:"警告哦，这是一条警告消息",type:"warning"})},open8:function(){this.$message({showClose:!0,message:"错了哦，这是一条错误消息",type:"error"})},openCenter:function(){this.$message({message:"居中的文字",center:!0})},openHTML:function(){this.$message({dangerouslyUseHTMLString:!0,message:"<strong>这是 <i>HTML</i> 片段</strong>"})}}},o=i,c=(s("b558"),s("17cc")),r=Object(c["a"])(o,n,a,!1,null,"6cb3e7fe",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-a7f4e3e0.d1d4277c.js.map