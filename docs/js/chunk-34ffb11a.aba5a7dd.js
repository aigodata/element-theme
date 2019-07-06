(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34ffb11a"],{"1b22":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"page-date-picker"},[e._m(0),t("p",[e._v("用于选择或输入日期")]),e._m(1),t("p",[e._v("以「日」为基本单位，基础的日期选择控件")]),t("div",{staticClass:"demo-block demo-zh-CN demo-date-picker"},[t("div",{staticClass:"source"},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("默认")]),t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("带快捷选项")]),t("el-date-picker",{attrs:{align:"right",type:"date",placeholder:"选择日期","picker-options":e.pickerOptions1},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)])]),e._m(2),t("p",[e._v("通过扩展基础的日期选择，可以选择周、月、年或多个日期")]),t("div",{staticClass:"demo-block demo-zh-CN demo-date-picker"},[t("div",{staticClass:"source"},[t("div",{staticClass:"container"},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("周")]),t("el-date-picker",{attrs:{type:"week",format:"yyyy 第 WW 周",placeholder:"选择周"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("月")]),t("el-date-picker",{attrs:{type:"month",placeholder:"选择月"},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}})],1)]),t("div",{staticClass:"container"},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("年")]),t("el-date-picker",{attrs:{type:"year",placeholder:"选择年"},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("多个日期")]),t("el-date-picker",{attrs:{type:"dates",placeholder:"选择一个或多个日期"},model:{value:e.value14,callback:function(a){e.value14=a},expression:"value14"}})],1)])])]),e._m(3),t("p",[e._v("可在一个选择器中便捷地选择一个时间范围")]),t("div",{staticClass:"demo-block demo-zh-CN demo-date-picker"},[t("div",{staticClass:"source"},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("默认")]),t("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("带快捷选项")]),t("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions2},model:{value:e.value7,callback:function(a){e.value7=a},expression:"value7"}})],1)])]),e._m(4),t("p",[e._v("可在一个选择器中便捷地选择一个月份范围")]),t("div",{staticClass:"demo-block demo-zh-CN demo-date-picker"},[t("div",{staticClass:"source"},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("默认")]),t("el-date-picker",{attrs:{type:"monthrange","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},model:{value:e.value15,callback:function(a){e.value15=a},expression:"value15"}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("带快捷选项")]),t("el-date-picker",{attrs:{type:"monthrange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份","picker-options":e.pickerOptions3},model:{value:e.value16,callback:function(a){e.value16=a},expression:"value16"}})],1)])]),e._m(5),t("p",[e._v("\n    使用format指定输入框的格式；使用value-format指定绑定值的格式。\n    默认情况下，组件接受并返回Date对象。以下为可用的格式化字串，以 UTC 2017年1月2日 03:04:05 为例：\n  ")]),t("div",{staticClass:"demo-block demo-zh-CN demo-date-picker"},[t("div",{staticClass:"source"},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("默认为 Date 对象")]),t("div",{staticClass:"demonstration"},[e._v("值："+e._s(e.value10))]),t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日"},model:{value:e.value10,callback:function(a){e.value10=a},expression:"value10"}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("使用 value-format")]),t("div",{staticClass:"demonstration"},[e._v("值："+e._s(e.value11))]),t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.value11,callback:function(a){e.value11=a},expression:"value11"}})],1),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("时间戳")]),t("div",{staticClass:"demonstration"},[e._v("值："+e._s(e.value12))]),t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"timestamp"},model:{value:e.value12,callback:function(a){e.value12=a},expression:"value12"}})],1)])]),e._m(6),t("p",[e._v("在选择日期范围时，指定起始日期和结束日期的默认时刻。")]),t("div",{staticClass:"demo-block demo-zh-CN demo-date-picker"},[t("div",{staticClass:"source"},[t("div",{staticClass:"block"},[t("p",[e._v("组件值："+e._s(e.value13))]),t("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"]},model:{value:e.value13,callback:function(a){e.value13=a},expression:"value13"}})],1)])])])},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{attrs:{id:"datepicker-ri-qi-xuan-ze-qi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datepicker-ri-qi-xuan-ze-qi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    DatePicker 日期选择器\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"xuan-ze-ri"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xuan-ze-ri","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    选择日\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"qi-ta-ri-qi-dan-wei"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qi-ta-ri-qi-dan-wei","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    其他日期单位\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"xuan-ze-ri-qi-fan-wei"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xuan-ze-ri-qi-fan-wei","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    选择日期范围\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"xuan-ze-yue-fen-fan-wei"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xuan-ze-yue-fen-fan-wei","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    选择月份范围\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"ri-qi-ge-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ri-qi-ge-shi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    日期格式\n  ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{attrs:{id:"mo-ren-xian-shi-ri-qi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mo-ren-xian-shi-ri-qi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    默认显示日期\n  ")])}],l={name:"date-picker",data:function(){return{pickerOptions1:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var a=new Date;a.setTime(a.getTime()-864e5),e.$emit("pick",a)}},{text:"一周前",onClick:function(e){var a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",a)}}]},value1:"",value2:"",value3:"",value4:"",value5:"",value14:"",pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",[t,a])}},{text:"最近一个月",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-2592e6),e.$emit("pick",[t,a])}},{text:"最近三个月",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-7776e6),e.$emit("pick",[t,a])}}]},value6:"",value7:"",pickerOptions3:{shortcuts:[{text:"本月",onClick:function(e){e.$emit("pick",[new Date,new Date])}},{text:"今年至今",onClick:function(e){var a=new Date,t=new Date((new Date).getFullYear(),0);e.$emit("pick",[t,a])}},{text:"最近六个月",onClick:function(e){var a=new Date,t=new Date;t.setMonth(t.getMonth()-6),e.$emit("pick",[t,a])}}]},value15:"",value16:"",value10:"",value11:"",value12:"",value13:""}}},n=l,r=(t("9a8e"),t("17cc")),c=Object(r["a"])(n,i,s,!1,null,"41da9d52",null);a["default"]=c.exports},"276a":function(e,a,t){},"9a8e":function(e,a,t){"use strict";var i=t("276a"),s=t.n(i);s.a}}]);
//# sourceMappingURL=chunk-34ffb11a.aba5a7dd.js.map