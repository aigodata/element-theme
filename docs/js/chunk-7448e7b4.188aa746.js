(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7448e7b4"],{"42a2":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"page-upload"},[e._m(0),a("p",[e._v("通过点击或者拖拽上传文件")]),e._m(1),a("div",{staticClass:"demo-block demo-zh-CN demo-upload"},[a("div",{staticClass:"source"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:3,"on-exceed":e.handleExceed,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]),e._m(2),a("p",[e._v("使用 before-upload 限制用户上传的图片格式和大小。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-upload"},[a("div",{staticClass:"source"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)]),e._m(3),a("p",[e._v("使用 list-type 属性来设置文件列表的样式。")]),a("div",{staticClass:"demo-block demo-zh-CN demo-upload"},[a("div",{staticClass:"source"},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)]),e._m(4),a("div",{staticClass:"demo-block demo-zh-CN demo-upload"},[a("div",{staticClass:"source"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList2,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]),e._m(5),a("p",[e._v("通过 on-change 钩子函数来对列表进行控制")]),a("div",{staticClass:"demo-block demo-zh-CN demo-upload"},[a("div",{staticClass:"source"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":e.handleChange,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]),e._m(6),a("div",{staticClass:"demo-block demo-zh-CN demo-upload"},[a("div",{staticClass:"source"},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])])],1)]),e._m(7),a("div",{staticClass:"demo-block demo-zh-CN demo-upload"},[a("div",{staticClass:"source"},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{attrs:{id:"upload-shang-chuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-shang-chuan","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    Upload 上传\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{attrs:{id:"dian-ji-shang-chuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dian-ji-shang-chuan","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    点击上传\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{attrs:{id:"yong-hu-tou-xiang-shang-chuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yong-hu-tou-xiang-shang-chuan","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    用户头像上传\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{attrs:{id:"zhao-pian-qiang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zhao-pian-qiang","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    照片墙\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{attrs:{id:"tu-pian-lie-biao-suo-lue-tu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tu-pian-lie-biao-suo-lue-tu","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    图片列表缩略图\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{attrs:{id:"shang-chuan-wen-jian-lie-biao-kong-zhi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shang-chuan-wen-jian-lie-biao-kong-zhi","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    上传文件列表控制\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{attrs:{id:"tuo-zhuai-shang-chuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuo-zhuai-shang-chuan","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    拖拽上传\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{attrs:{id:"shou-dong-shang-chuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shou-dong-shang-chuan","aria-hidden":"true"}},[e._v("¶")]),e._v("\n    手动上传\n  ")])}],o=(a("7f7f"),{name:"upload",data:function(){return{fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],imageUrl:"",dialogImageUrl:"",dialogVisible:!1,fileList2:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},submitUpload:function(){this.$refs.upload.submit()},handleChange:function(e,t){this.fileList=t.slice(-3)}}}),l=o,n=(a("f3e6"),a("2877")),r=Object(n["a"])(l,s,i,!1,null,"6aa920ae",null);t["default"]=r.exports},"7f7f":function(e,t,a){var s=a("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,l="name";l in i||a("9e1e")&&s(i,l,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},c561:function(e,t,a){},f3e6:function(e,t,a){"use strict";var s=a("c561"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-7448e7b4.188aa746.js.map