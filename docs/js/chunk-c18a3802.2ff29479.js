(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c18a3802"],{"11e9":function(t,e,a){var l=a("52a7"),r=a("4630"),n=a("6821"),s=a("6a99"),o=a("69a8"),i=a("c69a"),d=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?d:function(t,e){if(t=n(t),e=s(e,!0),i)try{return d(t,e)}catch(a){}if(o(t,e))return r(!l.f.call(t,e),t[e])}},"59f5":function(t,e,a){},"5dbc":function(t,e,a){var l=a("d3f4"),r=a("8b97").set;t.exports=function(t,e,a){var n,s=e.constructor;return s!==a&&"function"==typeof s&&(n=s.prototype)!==a.prototype&&l(n)&&r&&r(t,n),t}},"8b97":function(t,e,a){var l=a("d3f4"),r=a("cb7c"),n=function(t,e){if(r(t),!l(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,l){try{l=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),l(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:l(t,a),t}}({},!1):void 0),check:n}},9093:function(t,e,a){var l=a("ce10"),r=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return l(t,r)}},aa77:function(t,e,a){var l=a("5ca1"),r=a("be13"),n=a("79e5"),s=a("fdef"),o="["+s+"]",i="​",d=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t,e,a){var r={},o=n(function(){return!!s[t]()||i[t]()!=i}),d=r[t]=o?e(m):s[t];a&&(r[a]=d),l(l.P+l.F*o,"String",r)},m=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},ac6a:function(t,e,a){for(var l=a("cadf"),r=a("0d58"),n=a("2aba"),s=a("7726"),o=a("32e9"),i=a("84f2"),d=a("2b4c"),c=d("iterator"),u=d("toStringTag"),m=i.Array,b={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(b),p=0;p<h.length;p++){var f,v=h[p],_=b[v],w=s[v],g=w&&w.prototype;if(g&&(g[c]||o(g,c,m),g[u]||o(g,u,v),i[v]=m,_))for(f in l)g[f]||n(g,f,l[f],!0)}},c5f6:function(t,e,a){"use strict";var l=a("7726"),r=a("69a8"),n=a("2d95"),s=a("5dbc"),o=a("6a99"),i=a("79e5"),d=a("9093").f,c=a("11e9").f,u=a("86cc").f,m=a("aa77").trim,b="Number",h=l[b],p=h,f=h.prototype,v=n(a("2aeb")(f))==b,_="trim"in String.prototype,w=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():m(e,3);var a,l,r,n=e.charCodeAt(0);if(43===n||45===n){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+e}for(var s,i=e.slice(2),d=0,c=i.length;d<c;d++)if(s=i.charCodeAt(d),s<48||s>r)return NaN;return parseInt(i,l)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof h&&(v?i(function(){f.valueOf.call(a)}):n(a)!=b)?s(new p(w(e)),a,h):w(e)};for(var g,C=a("9e1e")?d(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;C.length>y;y++)r(p,g=C[y])&&!r(h,g)&&u(h,g,c(p,g));h.prototype=f,f.constructor=h,a("2aba")(l,b,h)}},c92c:function(t,e,a){"use strict";var l=a("59f5"),r=a.n(l);r.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ff09:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-table"},[t._m(0),a("p",[t._v("用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。")]),t._m(1),a("p",[t._v("基础的表格展示用法。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)]),t._m(2),a("p",[t._v("使用带斑马纹的表格，可以更容易区分出不同行的数据。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)]),t._m(3),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)]),t._m(4),a("p",[t._v("可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)]),t._m(5),a("p",[t._v("纵向内容过多时，可选择固定表头。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData01,height:"250",border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)]),t._m(6),a("p",[t._v("横向内容过多时，可选择固定列。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData02,border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("查看")]),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)],1)]),t._m(7),a("p",[t._v("横纵内容过多时，可选择固定列和表头。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData01,height:"250"}},[a("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}})],1)],1)]),t._m(8),a("p",[t._v("当数据量动态变化时，可以为 Table 设置一个最大高度。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData01,"max-height":"250"}},[a("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),t.deleteRow(e.$index,t.tableData)}}},[t._v("\n                移除\n              ")])]}}])})],1)],1)]),t._m(9),a("p",[t._v("数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),a("el-table-column",{attrs:{label:"配送信息"}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{label:"地址"}},[a("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}})],1)],1)],1)],1)]),t._m(10),a("p",[t._v("选择单行数据时使用色块表示。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{property:"date",label:"日期",width:"120"}}),a("el-table-column",{attrs:{property:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{property:"address",label:"地址"}})],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:function(e){t.setCurrent(t.tableData[1])}}},[t._v("选中第二行")]),a("el-button",{on:{click:function(e){t.setCurrent()}}},[t._v("取消选择")])],1)],1)]),t._m(11),a("p",[t._v("选择多行数据时使用 Checkbox。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:function(e){t.toggleSelection([t.tableData[1],t.tableData[2]])}}},[t._v("切换第二、第三行的选中状态")]),a("el-button",{on:{click:function(e){t.toggleSelection()}}},[t._v("取消选择")])],1)],1)]),t._m(12),a("p",[t._v("对表格进行排序，可快速查找或对比数据。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"date",label:"日期",sortable:"",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",sortable:"",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",formatter:t.formatter}})],1)],1)]),t._m(13),a("p",[t._v("对表格进行筛选，可快速查找到自己想看的数据。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-button",{on:{click:t.resetDateFilter}},[t._v("清除日期过滤器")]),a("el-button",{on:{click:t.clearFilter}},[t._v("清除所有过滤器")]),a("div",{staticStyle:{height:"20px"}}),a("el-table",{ref:"filterTable",staticStyle:{width:"100%"},attrs:{data:t.tableData03}},[a("el-table-column",{attrs:{prop:"date",label:"日期",sortable:"",width:"180","column-key":"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":t.filterHandler}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"tag",label:"标签",width:"100",filters:[{text:"家",value:"家"},{text:"公司",value:"公司"}],"filter-method":t.filterTag,"filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"家"===e.row.tag?"primary":"success","disable-transitions":""}},[t._v(t._s(e.row.tag))])]}}])})],1)],1)]),t._m(14),a("p",[t._v("当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData05}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("span",[t._v(t._s(e.row.name))])]),a("el-form-item",{attrs:{label:"所属店铺"}},[a("span",[t._v(t._s(e.row.shop))])]),a("el-form-item",{attrs:{label:"商品 ID"}},[a("span",[t._v(t._s(e.row.id))])]),a("el-form-item",{attrs:{label:"店铺 ID"}},[a("span",[t._v(t._s(e.row.shopId))])]),a("el-form-item",{attrs:{label:"商品分类"}},[a("span",[t._v(t._s(e.row.category))])]),a("el-form-item",{attrs:{label:"店铺地址"}},[a("span",[t._v(t._s(e.row.address))])]),a("el-form-item",{attrs:{label:"商品描述"}},[a("span",[t._v(t._s(e.row.desc))])])],1)]}}])}),a("el-table-column",{attrs:{label:"商品 ID",prop:"id"}}),a("el-table-column",{attrs:{label:"商品名称",prop:"name"}}),a("el-table-column",{attrs:{label:"描述",prop:"desc"}})],1)],1)]),t._m(15),a("p",[t._v("自定义列的显示内容，可组合其他组件使用。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData04}},[a("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.date))])]}}])}),a("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[t._v("姓名: "+t._s(e.row.name))]),a("p",[t._v("住址: "+t._s(e.row.address))]),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.name))])],1)])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)]),t._m(16),a("p",[t._v("表头支持自定义。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.filter(function(e){return!t.search||e.name.toLowerCase().includes(t.search.toLowerCase())})}},[a("el-table-column",{attrs:{label:"Date",prop:"date"}}),a("el-table-column",{attrs:{label:"Name",prop:"name"}}),a("el-table-column",{attrs:{align:"right"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}},{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("Edit")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("Delete")])]}}])})],1)],1)]),t._m(17),a("p",[t._v("若表格展示的是各类数字，可以在表尾显示各列的合计。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData06,border:"","show-summary":""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"amount1",sortable:"",label:"数值 1"}}),a("el-table-column",{attrs:{prop:"amount2",sortable:"",label:"数值 2"}}),a("el-table-column",{attrs:{prop:"amount3",sortable:"",label:"数值 3"}})],1),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData06,border:"",height:"200","summary-method":t.getSummaries,"show-summary":""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"amount1",label:"数值 1（元）"}}),a("el-table-column",{attrs:{prop:"amount2",label:"数值 2（元）"}}),a("el-table-column",{attrs:{prop:"amount3",label:"数值 3（元）"}})],1)],1)]),t._m(18),a("p",[t._v("多行或多列共用一个数据时，可以合并行或列。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData07,"span-method":t.arraySpanMethod,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"amount1",sortable:"",label:"数值 1"}}),a("el-table-column",{attrs:{prop:"amount2",sortable:"",label:"数值 2"}}),a("el-table-column",{attrs:{prop:"amount3",sortable:"",label:"数值 3"}})],1),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData07,"span-method":t.objectSpanMethod,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"amount1",label:"数值 1（元）"}}),a("el-table-column",{attrs:{prop:"amount2",label:"数值 2（元）"}}),a("el-table-column",{attrs:{prop:"amount3",label:"数值 3（元）"}})],1)],1)]),t._m(19),a("p",[t._v("自定义 type=index 列的行号。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-table"},[a("div",{staticClass:"source"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index",index:t.indexMethod}}),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{attrs:{id:"table-biao-ge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-biao-ge","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    Table 表格\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"ji-chu-biao-ge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-biao-ge","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    基础表格\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"dai-ban-ma-wen-biao-ge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ban-ma-wen-biao-ge","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    带斑马纹表格\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"dai-bian-kuang-biao-ge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dai-bian-kuang-biao-ge","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    带边框表格\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"dai-zhuang-tai-biao-ge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dai-zhuang-tai-biao-ge","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    带状态表格\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"gu-ding-biao-tou"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gu-ding-biao-tou","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    固定表头\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"gu-ding-lie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gu-ding-lie","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    固定列\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"gu-ding-lie-he-biao-tou"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gu-ding-lie-he-biao-tou","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    固定列和表头\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"liu-ti-gao-du"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#liu-ti-gao-du","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    流体高度\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"duo-ji-biao-tou"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duo-ji-biao-tou","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    多级表头\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"dan-xuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dan-xuan","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    单选\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"duo-xuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duo-xuan","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    多选\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"pai-xu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pai-xu","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    排序\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"shai-xuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shai-xuan","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    筛选\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"zhan-kai-xing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zhan-kai-xing","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    展开行\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"zi-ding-yi-lie-mo-ban"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-lie-mo-ban","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    自定义列模板\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"zi-ding-yi-biao-tou"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-biao-tou","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    自定义表头\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"biao-wei-he-ji-xing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#biao-wei-he-ji-xing","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    表尾合计行\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"he-bing-xing-huo-lie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#he-bing-xing-huo-lie","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    合并行或列\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{id:"zi-ding-yi-suo-yin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-suo-yin","aria-hidden":"true"}},[t._v("¶")]),t._v("\n    自定义索引\n  ")])}],n=(a("c5f6"),a("ac6a"),a("cadf"),a("551c"),a("f751"),a("097d"),{name:"table",data:function(){return{search:"",tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],tableData01:[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-08",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-06",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-07",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],tableData02:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}],tableData03:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",tag:"公司"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",tag:"家"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",tag:"公司"}],tableData04:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],tableData05:[{id:"12987122",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987123",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987125",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987126",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"}],tableData06:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}],tableData07:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{tableRowClassName:function(t){var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""},handleClick:function(t){console.log(t)},setCurrent:function(t){this.$refs.singleTable.setCurrentRow(t)},handleCurrentChange:function(t){this.currentRow=t},toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},resetDateFilter:function(){this.$refs.filterTable.clearFilter("date")},clearFilter:function(){this.$refs.filterTable.clearFilter()},formatter:function(t){return t.address},filterTag:function(t,e){return e.tag===t},filterHandler:function(t,e,a){var l=a["property"];return e[l]===t},handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){console.log(t,e)},getSummaries:function(t){var e=t.columns,a=t.data,l=[];return e.forEach(function(t,e){if(0!==e){var r=a.map(function(e){return Number(e[t.property])});r.every(function(t){return isNaN(t)})?l[e]="N/A":(l[e]=r.reduce(function(t,e){var a=Number(e);return isNaN(a)?t:t+e},0),l[e]+=" 元")}else l[e]="总价"}),l},arraySpanMethod:function(t){t.row,t.column;var e=t.rowIndex,a=t.columnIndex;if(e%2===0){if(0===a)return[1,2];if(1===a)return[0,0]}},objectSpanMethod:function(t){t.row,t.column;var e=t.rowIndex,a=t.columnIndex;if(0===a)return e%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},indexMethod:function(t){return 2*t}}}),s=n,o=(a("c92c"),a("2877")),i=Object(o["a"])(s,l,r,!1,null,"37353552",null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-c18a3802.2ff29479.js.map