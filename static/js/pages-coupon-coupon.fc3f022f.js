(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-coupon"],{"13d0":function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"coupon"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showLoad,expression:"showLoad"}],staticClass:"coupon-content"},[t._l(t.couponList,(function(n){return t.couponList.length?i("v-uni-view",{key:n.id,staticClass:"coupon-item"},[i("v-uni-view",{staticClass:"row-line cl-monet",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetails(n.ticketCode)}}},[3==n.type?i("v-uni-view",{staticClass:"money-num"},[t._v(t._s(10*n.discount)+"折")]):i("v-uni-view",{staticClass:"money-num"},[t._v("￥"+t._s(n.amount))]),i("v-uni-view",{staticClass:"money-text"},[t._v(t._s(t.typeList[n.type]))])],1),i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"row-conten"},[i("v-uni-view",{staticClass:"row-line line-middle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetails(n.ticketCode)}}},[i("v-uni-view",{staticClass:"coupon-min-title"},[t._v(t._s(n.templateName))]),i("v-uni-view",{staticClass:"coupon-time"},[t._v("截止日期："+t._s(n.edate))])],1),i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.etdiscounts(n.ticketCode)}}},[t._v("立即领取")])],1),i("v-uni-view",{staticClass:"meet"},[n.enableAmount?i("v-uni-view",{staticClass:"meet-text"},[t._v("满"+t._s(n.enableAmount)+"可用"),n.isMine?i("v-uni-text",{staticClass:"pad"},[t._v(t._s("可多张同时使用"))]):t._e()],1):t._e()],1)],1)],1):t._e()})),t.showLoad?i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.couponList.length,expression:"!couponList.length"}],staticClass:"none-coupon"},[i("v-uni-image",{attrs:{src:e("dc1d"),mode:""}}),i("v-uni-view",{staticClass:"none-text"},[t._v("暂时没有可领取的优惠券")])],1):t._e()],2)],1)},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},"2fc9":function(t,n,e){var i=e("8256");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("8c93bf0e",i,!0,{sourceMap:!1,shadowMode:!1})},"4cd3":function(t,n,e){"use strict";e("b680"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("1956"),o={data:function(){return{typeList:["满减券","礼品券","抵扣券","折扣券"],ticketStatusList:["未发放","已领取","已使用","已无效","立即领取"],couponList:[],showLoad:!1,Fixed:function(t){return 3===t.type?(10*t.discount).toFixed(1)+"折":"￥"+t.amount}}},onLoad:function(){this.getCouponList()},activated:function(){this.getCouponList(),console.log("执行页面数据刷新的方法")},methods:{getCouponList:function(){var t=this;this.showLoad=!1,uni.showLoading({title:"loading"});var n={openId:uni.getStorageSync("isWxMemberOpenId")||this.$route.query.openId,ticketStatus:4};i.http.post("/tapi/memberCoupon",n).then((function(n){0===n.data.code?t.couponList=n.data.data:t.couponList=[],uni.hideLoading(),t.showLoad=!0})).catch((function(n){uni.hideLoading(),t.showLoad=!0}))},etdiscounts:function(t){var n=this,e={code:t,openId:uni.getStorageSync("isWxMemberOpenId")||this.$route.query.openId};i.http.post("/tapi/receiveTicket",e).then((function(t){console.log(t),0===t.data.code&&(uni.showModal({title:"提示",content:"领取成功",showCancel:!1,success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}}),n.getCouponList())})).catch((function(t){}))},goDetails:function(t){uni.navigateTo({url:"../couponDetails/couponDetails?id="+t})}}};n.default=o},"518a":function(t,n,e){"use strict";var i=e("2fc9"),o=e.n(i);o.a},7963:function(t,n,e){"use strict";e.r(n);var i=e("4cd3"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},8256:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".pad[data-v-73fdbf23]{padding-left:%?20?%}.coupon-content[data-v-73fdbf23]{padding:%?20?% %?24?%;background-color:#fafafa;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.coupon[data-v-73fdbf23]{background-color:#fafafa;height:100vh;-webkit-box-sizing:border-box;box-sizing:border-box}.line-middle[data-v-73fdbf23]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-right:%?160?%;height:100%}",""]),t.exports=n},ab7c:function(t,n,e){"use strict";e.r(n);var i=e("13d0"),o=e("7963");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("518a");var s,c=e("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"73fdbf23",null,!1,i["a"],s);n["default"]=u.exports},dc1d:function(t,n,e){t.exports=e.p+"static/img/none.1a716f9c.png"}}]);