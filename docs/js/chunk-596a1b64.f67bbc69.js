(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-596a1b64"],{1114:function(t,e,a){"use strict";var o=a("aa77"),n=a.n(o);n.a},"9b7f":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-tooltip"},[t._m(0),a("p",[t._v("常用于展示鼠标 hover 时的提示信息。")]),t._m(1),a("p",[t._v("Dialog 弹出一个对话框，适合需要定制性更大的场景。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-tooltip"},[a("div",{staticClass:"source"},[a("div",{staticClass:"box"},[a("div",{staticClass:"top"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Top Left 提示文字",placement:"top-start"}},[a("el-button",[t._v("上左")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Top Center 提示文字",placement:"top"}},[a("el-button",[t._v("上边")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Top Right 提示文字",placement:"top-end"}},[a("el-button",[t._v("上右")])],1)],1),a("div",{staticClass:"left"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Left Top 提示文字",placement:"left-start"}},[a("el-button",[t._v("左上")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Left Center 提示文字",placement:"left"}},[a("el-button",[t._v("左边")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Left Bottom 提示文字",placement:"left-end"}},[a("el-button",[t._v("左下")])],1)],1),a("div",{staticClass:"right"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Right Top 提示文字",placement:"right-start"}},[a("el-button",[t._v("右上")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Right Center 提示文字",placement:"right"}},[a("el-button",[t._v("右边")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Right Bottom 提示文字",placement:"right-end"}},[a("el-button",[t._v("右下")])],1)],1),a("div",{staticClass:"bottom"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Bottom Left 提示文字",placement:"bottom-start"}},[a("el-button",[t._v("下左")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Bottom Center 提示文字",placement:"bottom"}},[a("el-button",[t._v("下边")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Bottom Right 提示文字",placement:"bottom-end"}},[a("el-button",[t._v("下右")])],1)],1)])])]),t._m(2),a("p",[t._v("Tooltip 组件提供了两个不同的主题：dark和light。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-tooltip"},[a("div",{staticClass:"source"},[a("el-tooltip",{attrs:{content:"Top center",placement:"top"}},[a("el-button",[t._v("Blue")])],1),a("el-tooltip",{attrs:{content:"Bottom center",placement:"bottom",effect:"light"}},[a("el-button",[t._v("Light")])],1)],1)]),t._m(3),a("p",[t._v("展示多行文本或者是设置文本内容的格式")]),a("div",{staticClass:"demo-block demo-zh-CN demo-tooltip"},[a("div",{staticClass:"source"},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("多行信息"),a("br"),t._v("第二行信息")]),a("el-button",[t._v("Top center")])],1)],1)]),t._m(4),t._m(5),a("div",{staticClass:"demo-block demo-zh-CN demo-tooltip"},[a("div",{staticClass:"source"},[a("el-tooltip",{attrs:{disabled:t.disabled,content:"点击关闭 tooltip 功能",placement:"bottom",effect:"light"}},[a("el-button",{on:{click:function(e){t.disabled=!t.disabled}}},[t._v("点击"+t._s(t.disabled?"开启":"关闭")+" tooltip 功能")])],1)],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{attrs:{id:"tooltip-wen-zi-ti-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tooltip-wen-zi-ti-shi","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    Tooltip 文字提示\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"ji-ben-yong-fa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    基本用法\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"zhu-ti"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zhu-ti","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    主题\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"geng-duo-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geng-duo-content","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    更多 Content\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"gao-ji-kuo-zhan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gao-ji-kuo-zhan","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    高级扩展\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n    除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果："),a("br"),t._v("\n\n    transition 属性可以定制显隐的动画效果，默认为fade-in-linear。 如果需要关闭 tooltip 功能，disabled 属性可以满足这个需求，它接受一个Boolean，设置为true即可。"),a("br"),t._v("\n\n    事实上，这是基于 Vue-popper 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。 当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。\n  ")])}],i=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"tooltip",data:function(){return{disabled:!1}}}),s=i,l=(a("1114"),a("2877")),c=Object(l["a"])(s,o,n,!1,null,"307581c7",null);e["default"]=c.exports},aa77:function(t,e,a){}}]);
//# sourceMappingURL=chunk-596a1b64.f67bbc69.js.map