(function(e){function t(t){for(var n,l,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)l=c[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var i=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},3127:function(e,t,r){"use strict";r("e8be")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.str,expression:"str"}],attrs:{type:"text"},domProps:{value:e.str},on:{input:[function(t){t.target.composing||(e.str=t.target.value)},e.changeStr]}}),r("van-field",{attrs:{formatter:e.formatter,label:"文本",placeholder:"请输入用户名"},model:{value:e.str2,callback:function(t){e.str2=t},expression:"str2"}}),r("van-field",{attrs:{formatter:e.formatter2,label:"文本",placeholder:"请输入用户名"},model:{value:e.str2,callback:function(t){e.str2=t},expression:"str2"}}),r("van-field",{attrs:{formatter:e.formatter3,label:"文本",placeholder:"请输入用户名"},model:{value:e.str2,callback:function(t){e.str2=t},expression:"str2"}})],1)},c=[],u=(r("ac1f"),r("5319"),{name:"HelloWorld",props:{msg:String},data:function(){return{str:"",str2:""}},methods:{changeStr:function(e){this.str=e.target.value.replace(/[`～*~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,"").replace(/\s/g,"")},formatter:function(e){return e.replace(/[`～*~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,"").replace(/\s/g,"")},formatter2:function(e){return e.replace(/[`～*~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,"")},formatter3:function(e){return e.replace(/\s/g,"")}}}),s=u,i=(r("3127"),r("2877")),f=Object(i["a"])(s,l,c,!1,null,"020ce7e5",null),p=f.exports,d={name:"App",components:{HelloWorld:p}},m=d,v=(r("034f"),Object(i["a"])(m,o,a,!1,null,null,null)),g=v.exports,b=r("565f");n["a"].config.productionTip=!1,n["a"].use(b["a"]),new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},e8be:function(e,t,r){}});
//# sourceMappingURL=app.2de04708.js.map