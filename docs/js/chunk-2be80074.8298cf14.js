(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be80074"],{"0a49":function(e,a,t){var n=t("9b43"),l=t("626a"),r=t("4bf8"),i=t("9def"),d=t("cd1c");e.exports=function(e,a){var t=1==e,c=2==e,o=3==e,s=4==e,h=6==e,u=5==e||h,f=a||d;return function(a,d,b){for(var v,p,g=r(a),m=l(g),k=n(d,b,3),_=i(m.length),C=0,y=t?f(a,_):c?f(a,0):void 0;_>C;C++)if((u||C in m)&&(v=m[C],p=k(v,C,g),e))if(t)y[C]=p;else if(p)switch(e){case 3:return!0;case 5:return v;case 6:return C;case 2:y.push(v)}else if(s)return!1;return h?-1:o||s?s:y}}},1169:function(e,a,t){var n=t("2d95");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"20d6":function(e,a,t){"use strict";var n=t("5ca1"),l=t("0a49")(6),r="findIndex",i=!0;r in[]&&Array(1)[r](function(){i=!1}),n(n.P+n.F*i,"Array",{findIndex:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")(r)},"454f":function(e,a,t){t("46a7");var n=t("584a").Object;e.exports=function(e,a,t){return n.defineProperty(e,a,t)}},"46a7":function(e,a,t){var n=t("63b6");n(n.S+n.F*!t("8e60"),"Object",{defineProperty:t("d9f6").f})},"781b":function(e,a,t){},"7f7f":function(e,a,t){var n=t("86cc").f,l=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in l||t("9e1e")&&n(l,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},"85f2":function(e,a,t){e.exports=t("454f")},a21f:function(e,a,t){var n=t("584a"),l=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},aa89:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"page-tree"},[e._m(0),t("p",[e._v("用清晰的层级结构展示信息，可展开或折叠。")]),e._m(1),t("p",[e._v("基础的树形结构展示。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-tree"},[t("div",{staticClass:"source"},[t("el-tree",{attrs:{data:e.data,props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1)]),e._m(2),t("p",[e._v("适用于需要选择层级时使用。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-tree"},[t("div",{staticClass:"source"},[t("el-tree",{attrs:{props:e.props,load:e.loadNode,lazy:"","show-checkbox":""},on:{"check-change":e.handleCheckChange}})],1)]),e._m(3),t("p",[e._v("可将 Tree 的某些节点设置为禁用状态")]),t("div",{staticClass:"demo-block demo-zh-CN demo-tree"},[t("div",{staticClass:"source"},[t("el-tree",{attrs:{data:e.data3,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5]}})],1)]),e._m(4),t("div",{staticClass:"demo-block demo-zh-CN demo-tree"},[t("div",{staticClass:"source"},[t("el-tree",{ref:"tree",attrs:{data:e.data2,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps}}),t("div",{staticClass:"buttons"},[t("el-button",{on:{click:e.getCheckedNodes}},[e._v("通过 node 获取")]),t("el-button",{on:{click:e.getCheckedKeys}},[e._v("通过 key 获取")]),t("el-button",{on:{click:e.setCheckedNodes}},[e._v("通过 node 设置")]),t("el-button",{on:{click:e.setCheckedKeys}},[e._v("通过 key 设置")]),t("el-button",{on:{click:e.resetChecked}},[e._v("清空")])],1)],1)]),e._m(5),t("p",[e._v("节点的内容支持自定义，可以在节点区添加按钮或图标等内容")]),t("div",{staticClass:"demo-block demo-zh-CN demo-tree"},[t("div",{staticClass:"source"},[t("div",{staticClass:"custom-tree-container"},[t("div",{staticClass:"block"},[t("p",[e._v("使用 render-content")]),t("el-tree",{attrs:{data:e.data4,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":e.renderContent}})],1),t("div",{staticClass:"block"},[t("p",[e._v("使用 scoped slot")]),t("el-tree",{attrs:{data:e.data5,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.node,l=a.data;return t("span",{staticClass:"custom-tree-node"},[t("span",[e._v(e._s(n.label))]),t("span",[t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.append(l)}}},[e._v("\n                  Append\n                ")]),t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.remove(n,l)}}},[e._v("\n                  Delete\n                ")])],1)])}}])})],1)])])]),e._m(6),t("p",[e._v("通过关键字过滤树节点")]),t("div",{staticClass:"demo-block demo-zh-CN demo-tree"},[t("div",{staticClass:"source"},[t("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(a){e.filterText=a},expression:"filterText"}}),t("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:e.data2,props:e.defaultProps,"default-expand-all":"","filter-node-method":e.filterNode}})],1)]),e._m(7),t("p",[e._v("对于同一级的节点，每次只能展开一个")]),t("div",{staticClass:"demo-block demo-zh-CN demo-tree"},[t("div",{staticClass:"source"},[t("el-tree",{attrs:{data:e.data,props:e.defaultProps,accordion:""},on:{"node-click":e.handleNodeClick}})],1)]),e._m(8),t("p",[e._v("通过 draggable 属性可让节点变为可拖拽。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-tree"},[t("div",{staticClass:"source"},[t("el-tree",{attrs:{data:e.data6,"node-key":"id","default-expand-all":"",draggable:"","allow-drop":e.allowDrop,"allow-drag":e.allowDrag},on:{"node-drag-start":e.handleDragStart,"node-drag-enter":e.handleDragEnter,"node-drag-leave":e.handleDragLeave,"node-drag-over":e.handleDragOver,"node-drag-end":e.handleDragEnd,"node-drop":e.handleDrop}})],1)])])},l=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{attrs:{id:"tree-shu-xing-kong-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree-shu-xing-kong-jian","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    Tree 树形控件\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"ji-chu-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    基础用法\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"ke-xuan-ze"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ke-xuan-ze","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    可选择\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"jin-yong-zhuang-tai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-zhuang-tai","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    禁用状态\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"shu-jie-dian-de-xuan-ze"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shu-jie-dian-de-xuan-ze","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    树节点的选择\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"zi-ding-yi-jie-dian-nei-rong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-jie-dian-nei-rong","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    自定义节点内容\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"jie-dian-guo-lu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jie-dian-guo-lu","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    节点过滤\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"shou-feng-qin-mo-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shou-feng-qin-mo-shi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    手风琴模式\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"ke-tuo-zhuai-jie-dian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ke-tuo-zhuai-jie-dian","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    可拖拽节点\n  ")])}],r=(t("20d6"),t("7f7f"),t("bd86")),i=t("f499"),d=t.n(i),c=(t("cadf"),t("551c"),t("f751"),t("097d"),1e3),o={watch:{filterText:function(e){this.$refs.tree2.filter(e)}},name:"tree",data:function(){var e,a=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}];return e={data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"},props:{label:"name",children:"zones"},count:1,data3:[{id:1,label:"一级 2",children:[{id:3,label:"二级 2-1",children:[{id:4,label:"三级 3-1-1"},{id:5,label:"三级 3-1-2",disabled:!0}]},{id:2,label:"二级 2-2",disabled:!0,children:[{id:6,label:"三级 3-2-1"},{id:7,label:"三级 3-2-2",disabled:!0}]}]}]},Object(r["a"])(e,"defaultProps",{children:"children",label:"label"}),Object(r["a"])(e,"data2",[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}]),Object(r["a"])(e,"defaultProps",{children:"children",label:"label"}),Object(r["a"])(e,"data4",JSON.parse(d()(a))),Object(r["a"])(e,"data5",JSON.parse(d()(a))),Object(r["a"])(e,"filterText",""),Object(r["a"])(e,"data2",[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}]),Object(r["a"])(e,"defaultProps",{children:"children",label:"label"}),Object(r["a"])(e,"data",[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}]),Object(r["a"])(e,"defaultProps",{children:"children",label:"label"}),Object(r["a"])(e,"data6",[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2",children:[{id:11,label:"三级 3-2-1"},{id:12,label:"三级 3-2-2"},{id:13,label:"三级 3-2-3"}]}]}]),Object(r["a"])(e,"defaultProps",{children:"children",label:"label"}),e},methods:{handleNodeClick:function(e){console.log(e)},handleCheckChange:function(e,a,t){console.log(e,a,t)},loadNode:function(e,a){var t,n=this;return 0===e.level?a([{name:"region1"},{name:"region2"}]):e.level>3?a([]):(t="region1"===e.data.name||"region2"!==e.data.name&&Math.random()>.5,void setTimeout(function(){var e;e=t?[{name:"zone"+n.count++},{name:"zone"+n.count++}]:[],a(e)},500))},getCheckedNodes:function(){console.log(this.$refs.tree.getCheckedNodes())},getCheckedKeys:function(){console.log(this.$refs.tree.getCheckedKeys())},setCheckedNodes:function(){this.$refs.tree.setCheckedNodes([{id:5,label:"二级 2-1"},{id:9,label:"三级 1-1-1"}])},setCheckedKeys:function(){this.$refs.tree.setCheckedKeys([3])},resetChecked:function(){this.$refs.tree.setCheckedKeys([])},append:function(e){var a={id:c++,label:"testtest",children:[]};e.children||this.$set(e,"children",[]),e.children.push(a)},remove:function(e,a){var t=e.parent,n=t.data.children||t.data,l=n.findIndex(function(e){return e.id===a.id});n.splice(l,1)},renderContent:function(e,a){var t=this,n=a.node,l=a.data;a.store;return e("span",{class:"custom-tree-node"},[e("span",[n.label]),e("span",[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return t.append(l)}}},["Append"]),e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return t.remove(n,l)}}},["Delete"])])])},filterNode:function(e,a){return!e||-1!==a.label.indexOf(e)},handleDragStart:function(e,a){console.log("drag start",e)},handleDragEnter:function(e,a,t){console.log("tree drag enter: ",a.label)},handleDragLeave:function(e,a,t){console.log("tree drag leave: ",a.label)},handleDragOver:function(e,a,t){console.log("tree drag over: ",a.label)},handleDragEnd:function(e,a,t,n){console.log("tree drag end: ",a&&a.label,t)},handleDrop:function(e,a,t,n){console.log("tree drop: ",a.label,t)},allowDrop:function(e,a,t){return"二级 3-1"!==a.data.label||"inner"!==t},allowDrag:function(e){return-1===e.data.label.indexOf("三级 3-2-2")}}},s=o,h=(t("fe6b"),t("2877")),u=Object(h["a"])(s,n,l,!1,null,"b294b29c",null);a["default"]=u.exports},bd86:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t("85f2"),l=t.n(n);function r(e,a,t){return a in e?l()(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}},cd1c:function(e,a,t){var n=t("e853");e.exports=function(e,a){return new(n(e))(a)}},e853:function(e,a,t){var n=t("d3f4"),l=t("1169"),r=t("2b4c")("species");e.exports=function(e){var a;return l(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!l(a.prototype)||(a=void 0),n(a)&&(a=a[r],null===a&&(a=void 0))),void 0===a?Array:a}},f499:function(e,a,t){e.exports=t("a21f")},fe6b:function(e,a,t){"use strict";var n=t("781b"),l=t.n(n);l.a}}]);
//# sourceMappingURL=chunk-2be80074.8298cf14.js.map