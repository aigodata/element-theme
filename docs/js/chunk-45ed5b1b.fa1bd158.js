(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ed5b1b"],{"42a1":function(e,t,r){},"4d98":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"page-progress"},[e._m(0),r("p",[e._v("用于展示操作进度，告知用户当前状态和预期。")]),e._m(1),r("div",{staticClass:"demo-block demo-zh-CN demo-progress"},[r("div",{staticClass:"source"},[r("el-progress",{attrs:{percentage:0}}),r("el-progress",{attrs:{percentage:70}}),r("el-progress",{attrs:{percentage:80,color:"#8e71c7"}}),r("el-progress",{attrs:{percentage:100,status:"success"}}),r("el-progress",{attrs:{percentage:50,status:"exception"}})],1)]),e._m(2),r("p",[e._v("百分比不占用额外控件，适用于文件上传等场景。")]),r("div",{staticClass:"demo-block demo-zh-CN demo-progress"},[r("div",{staticClass:"source"},[r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:0}}),r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:70}}),r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:80,color:"rgba(142, 113, 199, 0.7)"}}),r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:100,status:"success"}}),r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:50,status:"exception"}})],1)]),e._m(3),r("p",[e._v("可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。")]),r("div",{staticClass:"demo-block demo-zh-CN demo-progress"},[r("div",{staticClass:"source"},[r("el-progress",{attrs:{percentage:e.percentage,color:e.customColor}}),r("el-progress",{attrs:{percentage:e.percentage,color:e.customColorMethod}}),r("el-progress",{attrs:{percentage:e.percentage,color:e.customColors}}),r("div",[r("el-button-group",[r("el-button",{attrs:{icon:"el-icon-minus"},on:{click:e.decrease}}),r("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.increase}})],1)],1)],1)]),e._m(4),r("div",{staticClass:"demo-block demo-zh-CN demo-progress"},[r("div",{staticClass:"source"},[r("el-progress",{attrs:{type:"circle",percentage:0}}),r("el-progress",{attrs:{type:"circle",percentage:25}}),r("el-progress",{attrs:{type:"circle",percentage:80,color:"#8e71c7"}}),r("el-progress",{attrs:{type:"circle",percentage:100,status:"success"}}),r("el-progress",{attrs:{type:"circle",percentage:50,status:"exception"}}),r("el-progress",{attrs:{type:"circle",percentage:100,status:"text"}},[e._v("Done")])],1)]),e._m(5),r("div",{staticClass:"demo-block demo-zh-CN demo-progress"},[r("div",{staticClass:"source"},[r("el-progress",{attrs:{type:"dashboard",percentage:e.percentage,color:e.colors}}),r("div",[r("el-button-group",[r("el-button",{attrs:{icon:"el-icon-minus"},on:{click:e.decrease01}}),r("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.increase01}})],1)],1)],1)])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{attrs:{id:"progress-jin-du-tiao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#progress-jin-du-tiao","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    Progress 进度条\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"xian-xing-jin-du-tiao-bai-fen-bi-wai-xian"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xian-xing-jin-du-tiao-bai-fen-bi-wai-xian","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    线形进度条 — 百分比外显\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"xian-xing-jin-du-tiao-bai-fen-bi-nei-xian"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xian-xing-jin-du-tiao-bai-fen-bi-nei-xian","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    线形进度条 — 百分比内显\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"zi-ding-yi-yan-se"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-yan-se","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    自定义颜色\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"huan-xing-jin-du-tiao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#huan-xing-jin-du-tiao","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    环形进度条\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"yi-biao-pan-xing-jin-du-tiao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yi-biao-pan-xing-jin-du-tiao","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    仪表盘形进度条\n  ")])}],n=r("4dab"),c={name:"progress",data:function(){var e;return e={percentage:20,customColor:"#409eff",customColors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]},Object(n["a"])(e,"percentage",10),Object(n["a"])(e,"colors",[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]),e},methods:{customColorMethod:function(e){return e<30?"#909399":e<70?"#e6a23c":"#67c23a"},increase:function(){this.percentage+=10,this.percentage>100&&(this.percentage=100)},decrease:function(){this.percentage-=10,this.percentage<0&&(this.percentage=0)},increase01:function(){this.percentage+=10,this.percentage>100&&(this.percentage=100)},decrease01:function(){this.percentage-=10,this.percentage<0&&(this.percentage=0)}}},i=c,o=(r("996a"),r("17cc")),l=Object(o["a"])(i,a,s,!1,null,"3b45a7ee",null);t["default"]=l.exports},"4dab":function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",function(){return a})},"996a":function(e,t,r){"use strict";var a=r("42a1"),s=r.n(a);s.a}}]);
//# sourceMappingURL=chunk-45ed5b1b.fa1bd158.js.map