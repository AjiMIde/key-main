(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51136496"],{"1fdd":function(n,t,e){},"51e6":function(n,t,e){"use strict";var o=e("1fdd"),i=e.n(o);i.a},9896:function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"g5"},[e("h5",[n._v("这是一个h5页面")]),e("h6",[n._v("所在停车场--红富新停车场")]),e("h6",[n._v("停车时间----1小时")]),e("h6",[n._v("停车费用----18元")]),e("h6",[e("button",{on:{click:n.pay}},[n._v("支付")])])])},i=[],a=(e("cadf"),e("551c"),e("097d"),{name:"",components:{},data:function(){return{}},methods:{dynamicLoadJs:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,e=document.createElement("script"),o=document.getElementsByTagName("head")[0];e.src=n,e.charset="utf-8",o.appendChild(e),e.onload=function(){t&&"function"===typeof t&&t()}},pay:function(){if(window.wx&&window.wx.miniProgram){var n=window.wx.miniProgram;n.getEnv(function(t){n.postMessage({data:JSON.stringify({area:"红富兴",time:60,cost:18,orderId:"21321561654"})}),n.redirectTo({url:"/pages/debug/debug3"})})}}},created:function(){},mounted:function(){this.dynamicLoadJs("https://res.wx.qq.com/open/js/jweixin-1.3.2.js",function(){})}}),c=a,d=(e("51e6"),e("2877")),s=Object(d["a"])(c,o,i,!1,null,null,null);s.options.__file="g5.vue";t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-51136496.d9f16dda.js.map