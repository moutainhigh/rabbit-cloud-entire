webpackJsonp([7],{DEvV:function(t,e,i){var o=i("Hdmx");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("XkoO")("325acfd5",o,!0)},Hdmx:function(t,e,i){(t.exports=i("acE3")(!1)).push([t.i,"\n.mod-demo-ueditor {\n  position: relative;\n  z-index: 510;\n}\n.mod-demo-ueditor > .el-alert {\n    margin-bottom: 10px;\n}\n",""])},t1fE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("fZIC"),n=i.n(o),l={data:function(){return{ue:null,ueId:"J_ueditorBox_"+(new Date).getTime(),ueContent:"",dialogVisible:!1}},mounted:function(){this.ue=n.a.getEditor(this.ueId,{zIndex:3e3})},methods:{getContent:function(){var t=this;this.dialogVisible=!0,this.ue.ready(function(){t.ueContent=t.ue.getContent()})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mod-demo-ueditor"},[i("el-alert",{attrs:{title:"提示：",type:"warning",closable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return i("div",{},[i("p",{staticClass:"el-alert__description"},[t._v("1. 此Demo只提供UEditor官方使用文档，入门部署和体验功能。具体使用请参考：http://fex.baidu.com/ueditor/")]),t._v(" "),i("p",{staticClass:"el-alert__description"},[t._v("2. 浏览器控制台报错“请求后台配置项http错误，上传功能将不能正常使用！”，此错需要后台提供上传接口方法（赋值给serverUrl属性）")])])}}])}),t._v(" "),i("script",{staticClass:"ueditor-box",staticStyle:{width:"100%",height:"260px"},attrs:{id:t.ueId,type:"text/plain"}},[t._v("hello world!")]),t._v(" "),i("p",[i("el-button",{on:{click:function(e){t.getContent()}}},[t._v("获得内容")])],1),t._v(" "),i("el-dialog",{attrs:{title:"内容",visible:t.dialogVisible,"append-to-body":!0},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._v("\n    "+t._s(t.ueContent)+"\n    "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var a=i("46Yf")(l,s,!1,function(t){i("DEvV")},null,null);e.default=a.exports}});