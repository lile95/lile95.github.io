(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-transit-transit"],{"45a1":function(t,e,n){"use strict";n.r(e);var i=n("7120"),o=n("ce76");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);var r,a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"6637d93f",null,!1,i["a"],r);e["default"]=s.exports},4983:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},onLoad:function(t){console.log(t);try{if(uni.setStorageSync("isWxAccountAppId",t.appid),uni.setStorageSync("isWxMemberOpenId",t.openid),"{}"!=JSON.stringify(this.$store.state.navigateOption)){var e=this.$store.state.navigateOption,n="?shop="+e.shop+"&table="+e.table+"&wmtype=0&appid="+t.appid+"&openId="+t.openid;uni.reLaunch({url:"../order/menuList/menuList"+n})}else this.$store.state.homeOptions=t,uni.getSetting({success:function(t){console.log(t,"getSetting"),t.authSetting["scope.userInfo"]?uni.switchTab({url:"../home/home"}):uni.redirectTo({url:"../authorize/authorize"})}})}catch(i){}},methods:{}};e.default=i},7120:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view")},u=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},ce76:function(t,e,n){"use strict";n.r(e);var i=n("4983"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a}}]);