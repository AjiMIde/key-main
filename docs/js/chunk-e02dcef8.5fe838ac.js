(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e02dcef8"],{"18ba":function(t,s,i){},"98e3":function(t,s,i){"use strict";var n=i("18ba"),e=i.n(n);e.a},c0b3:function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"chat-demo"},[i("div",{staticClass:"chat-container"},[i("div",{ref:"chatList",staticClass:"chat-list"},t._l(t.list,function(s,n){return i("div",{key:n,staticClass:"chat-item"},[t._v("\n        "+t._s(s.txt)+"\n      ")])}),0)])])},e=[],a={name:"",components:{},data:function(){return{list:[{txt:"adbcadfeae"},{txt:"adjfakldjj"},{txt:"3465464654"}]}},methods:{pushList:function(){var t=this;if(!(this.list.length>=14)){var s=Math.floor(1e9*Math.random()+1);this.list.push({txt:s}),this.$nextTick(function(){t.$refs.chatList.style.bottom="-30px",window.setTimeout(function(){t.$refs.chatList.style.transition="all .5s",t.$refs.chatList.style.bottom="0px"},100),window.setTimeout(function(){t.$refs.chatList.style.transition=""},600),t.list.length>8&&t.list.splice(0,1)})}}},mounted:function(){var t=this;console.log(window.m=this),window.setInterval(function(){t.pushList()},1e3)}},o=a,c=(i("98e3"),i("2877")),l=Object(c["a"])(o,n,e,!1,null,null,null);l.options.__file="chatDemo.vue";s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-e02dcef8.5fe838ac.js.map