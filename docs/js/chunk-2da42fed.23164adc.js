(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2da42fed"],{1404:function(t,c,n){"use strict";n.r(c);var i=function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",{staticClass:"my-music"},[n("div",{staticClass:"my-music-container",on:{click:t.musicClick}},[n("music-comp",{attrs:{data:t.musics}})],1)])},s=[],u=function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",{staticClass:"music-comp"},[n("ul",t._l(t.data,function(c,i){return n("li",{key:i},[c.children&&c.children.length>0?n("div",[n("div",{staticClass:"music-title"},[t._v(t._s(c.text))]),n("music-comp",{attrs:{data:c.children}})],1):n("div",{staticClass:"music-item"},[n("span",{attrs:{href:"file:///"+c.path},on:{click:function(n){return t.musicClick(c)}}},[t._v("\n          "+t._s(c.text)+"\n        ")])])])}),0)])},e=[],a={name:"musicComp",components:{musicComp:r},props:{data:{default:[],type:Array}},data:function(){return{}},methods:{musicClick:function(t){}},mounted:function(){}},o=a,l=(n("732e"),n("2877")),m=Object(l["a"])(o,u,e,!1,null,null,null);m.options.__file="music-comp.vue";var r=m.exports,d={name:"myMusic",components:{musicComp:r},data:function(){return{musics:[],musicPath:"",musicPlay:null,d:[{txt:"a"},{txt:"b"},{txt:"c",c:[{txt:"cc"},{txt:"ccc"},{txt:"d",c:[{txt:"dd"},{txt:"ddd"}]}]}]}},methods:{musicClick:function(t){this.musicPath=window.encodeURIComponent(t.target.attributes.href.value),this.musicPlay.play()},goto:function(t){var c=this;this.axios.get("./xx.json").then(function(t){var n=t.data;n&&n.length>0&&(c.musics=n)}).catch(function(t){console.error(t)})},x:function(){}},mounted:function(){console.log(window.mm=this),this.goto(),this.musicPlay=document.getElementById("musicPlay")}},f=d,h=(n("a3b1"),Object(l["a"])(f,i,s,!1,null,null,null));h.options.__file="my-music.vue";c["default"]=h.exports},"36a1":function(t,c,n){},"732e":function(t,c,n){"use strict";var i=n("8492"),s=n.n(i);s.a},8492:function(t,c,n){},a3b1:function(t,c,n){"use strict";var i=n("36a1"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-2da42fed.23164adc.js.map