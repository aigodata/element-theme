(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4adee68c"],{"3d4b":function(o,t,e){"use strict";e.r(t);var n=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("section",{staticClass:"page-dropdown"},[o._m(0),e("p",[o._v("将动作或菜单折叠到下拉菜单中。")]),o._m(1),e("p",[o._v("移动到下拉菜单上，展开更多操作。")]),e("div",{staticClass:"demo-block demo-zh-CN demo-dropdown"},[e("div",{staticClass:"source"},[e("el-dropdown",[e("span",{staticClass:"el-dropdown-link"},[o._v("\n          下拉菜单"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[o._v("黄金糕")]),e("el-dropdown-item",[o._v("狮子头")]),e("el-dropdown-item",[o._v("螺蛳粉")]),e("el-dropdown-item",{attrs:{disabled:""}},[o._v("双皮奶")]),e("el-dropdown-item",{attrs:{divided:""}},[o._v("蚵仔煎")])],1)],1)],1)]),o._m(2),e("p",[o._v("可使用按钮触发下拉菜单。")]),e("div",{staticClass:"demo-block demo-zh-CN demo-dropdown"},[e("div",{staticClass:"source"},[e("el-dropdown",[e("el-button",{attrs:{type:"primary"}},[o._v("\n          更多菜单"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[o._v("黄金糕")]),e("el-dropdown-item",[o._v("狮子头")]),e("el-dropdown-item",[o._v("螺蛳粉")]),e("el-dropdown-item",[o._v("双皮奶")]),e("el-dropdown-item",[o._v("蚵仔煎")])],1)],1),e("el-dropdown",{attrs:{"split-button":"",type:"primary"},on:{click:o.handleClick}},[o._v("\n        更多菜单\n        "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[o._v("黄金糕")]),e("el-dropdown-item",[o._v("狮子头")]),e("el-dropdown-item",[o._v("螺蛳粉")]),e("el-dropdown-item",[o._v("双皮奶")]),e("el-dropdown-item",[o._v("蚵仔煎")])],1)],1)],1)]),o._m(3),e("p",[o._v("可以配置 click 激活或者 hover 激活。")]),e("div",{staticClass:"demo-block demo-zh-CN demo-dropdown"},[e("div",{staticClass:"source"},[e("el-row",{staticClass:"block-col-2"},[e("el-col",{attrs:{span:12}},[e("span",{staticClass:"demonstration"},[o._v("hover 激活")]),e("el-dropdown",[e("span",{staticClass:"el-dropdown-link"},[o._v("\n              下拉菜单"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{icon:"el-icon-plus"}},[o._v("黄金糕")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus"}},[o._v("狮子头")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus-outline"}},[o._v("螺蛳粉")]),e("el-dropdown-item",{attrs:{icon:"el-icon-check"}},[o._v("双皮奶")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-check-outline"}},[o._v("蚵仔煎")])],1)],1)],1),e("el-col",{attrs:{span:12}},[e("span",{staticClass:"demonstration"},[o._v("click 激活")]),e("el-dropdown",{attrs:{trigger:"click"}},[e("span",{staticClass:"el-dropdown-link"},[o._v("\n              下拉菜单"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{icon:"el-icon-plus"}},[o._v("黄金糕")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus"}},[o._v("狮子头")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus-outline"}},[o._v("螺蛳粉")]),e("el-dropdown-item",{attrs:{icon:"el-icon-check"}},[o._v("双皮奶")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-check-outline"}},[o._v("蚵仔煎")])],1)],1)],1)],1)],1)]),o._m(4),e("p",[o._v("可以hide-on-click属性来配置。")]),e("div",{staticClass:"demo-block demo-zh-CN demo-dropdown"},[e("div",{staticClass:"source"},[e("el-dropdown",{attrs:{"hide-on-click":!1}},[e("span",{staticClass:"el-dropdown-link"},[o._v("\n          下拉菜单"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[o._v("黄金糕")]),e("el-dropdown-item",[o._v("狮子头")]),e("el-dropdown-item",[o._v("螺蛳粉")]),e("el-dropdown-item",{attrs:{disabled:""}},[o._v("双皮奶")]),e("el-dropdown-item",{attrs:{divided:""}},[o._v("蚵仔煎")])],1)],1)],1)]),o._m(5),e("p",[o._v("点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作")]),e("div",{staticClass:"demo-block demo-zh-CN demo-dropdown"},[e("div",{staticClass:"source"},[e("el-dropdown",{on:{command:o.handleCommand}},[e("span",{staticClass:"el-dropdown-link"},[o._v("\n          下拉菜单"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"a"}},[o._v("黄金糕")]),e("el-dropdown-item",{attrs:{command:"b"}},[o._v("狮子头")]),e("el-dropdown-item",{attrs:{command:"c"}},[o._v("螺蛳粉")]),e("el-dropdown-item",{attrs:{command:"d",disabled:""}},[o._v("双皮奶")]),e("el-dropdown-item",{attrs:{command:"e",divided:""}},[o._v("蚵仔煎")])],1)],1)],1)]),o._m(6),e("p",[o._v("Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。")]),e("div",{staticClass:"demo-block demo-zh-CN demo-dropdown"},[e("div",{staticClass:"source"},[e("el-dropdown",{attrs:{"split-button":"",type:"primary"}},[o._v("\n        默认尺寸\n        "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[o._v("黄金糕")]),e("el-dropdown-item",[o._v("狮子头")]),e("el-dropdown-item",[o._v("螺蛳粉")]),e("el-dropdown-item",[o._v("双皮奶")]),e("el-dropdown-item",[o._v("蚵仔煎")])],1)],1),e("el-dropdown",{attrs:{size:"medium","split-button":"",type:"primary"}},[o._v("\n        中等尺寸\n        "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[o._v("黄金糕")]),e("el-dropdown-item",[o._v("狮子头")]),e("el-dropdown-item",[o._v("螺蛳粉")]),e("el-dropdown-item",[o._v("双皮奶")]),e("el-dropdown-item",[o._v("蚵仔煎")])],1)],1),e("el-dropdown",{attrs:{size:"small","split-button":"",type:"primary"}},[o._v("\n        小型尺寸\n        "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[o._v("黄金糕")]),e("el-dropdown-item",[o._v("狮子头")]),e("el-dropdown-item",[o._v("螺蛳粉")]),e("el-dropdown-item",[o._v("双皮奶")]),e("el-dropdown-item",[o._v("蚵仔煎")])],1)],1),e("el-dropdown",{attrs:{size:"mini","split-button":"",type:"primary"}},[o._v("\n        超小尺寸\n        "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[o._v("黄金糕")]),e("el-dropdown-item",[o._v("狮子头")]),e("el-dropdown-item",[o._v("螺蛳粉")]),e("el-dropdown-item",[o._v("双皮奶")]),e("el-dropdown-item",[o._v("蚵仔煎")])],1)],1)],1)])])},d=[function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("h2",{attrs:{id:"dropdown-xia-la-cai-dan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dropdown-xia-la-cai-dan","aria-hidden":"true"}},[o._v("¶")]),o._v("\n    Dropdown 下拉菜单\n  ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("h3",{attrs:{id:"ji-ben-yong-fa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa","aria-hidden":"true"}},[o._v("¶")]),o._v("\n    基本用法\n  ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("h3",{attrs:{id:"hong-fa-dui-xiang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hong-fa-dui-xiang","aria-hidden":"true"}},[o._v("¶")]),o._v("\n    触发对象\n  ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("h3",{attrs:{id:"hong-fa-fang-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hong-fa-fang-shi","aria-hidden":"true"}},[o._v("¶")]),o._v("\n    触发方式\n  ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("h3",{attrs:{id:"cai-dan-yin-cang-fang-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cai-dan-yin-cang-fang-shi","aria-hidden":"true"}},[o._v("¶")]),o._v("\n    菜单隐藏方式\n  ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("h3",{attrs:{id:"zhi-ling-shi-jian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhi-ling-shi-jian","aria-hidden":"true"}},[o._v("¶")]),o._v("\n    指令事件\n  ")])},function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("h3",{attrs:{id:"bu-tong-chi-cun"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-chi-cun","aria-hidden":"true"}},[o._v("¶")]),o._v("\n    不同尺寸\n  ")])}],r={name:"dropdown",data:function(){return{}},methods:{handleClick:function(){alert("button click")},handleCommand:function(o){this.$message("click on item "+o)}}},i=r,a=(e("6abc"),e("2877")),s=Object(a["a"])(i,n,d,!1,null,"105ea2ab",null);t["default"]=s.exports},"6abc":function(o,t,e){"use strict";var n=e("8bb4"),d=e.n(n);d.a},"8bb4":function(o,t,e){}}]);
//# sourceMappingURL=chunk-4adee68c.b7a57653.js.map