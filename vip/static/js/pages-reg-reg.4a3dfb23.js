(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg-reg"],{"00f8":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.canvas-img-code[data-v-39a826ae]{display:inline-block}',""]),e.exports=t},"1de5":function(e,t,a){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"2a14":function(e,t,a){"use strict";var i={imgcode:a("61f2").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"login"},[i("v-uni-view",{staticClass:"login-head"},[i("v-uni-view",{staticClass:"head-inmage"},[i("v-uni-view",{staticClass:"image-box"},[e.query.imgurl?i("v-uni-image",{attrs:{src:e.query.imgurl,mode:""}}):i("v-uni-image",{attrs:{src:a("7959").replace(/^\./,""),mode:""}}),i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.upHeadImg.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"userName"},[e._v(e._s(e.query.nickName||""))])],1)],1),i("v-uni-view",{staticClass:"login-form"},[i("v-uni-view",{staticClass:"form-row"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("姓名")]),i("v-uni-view",{staticClass:"form-text "},[i("v-uni-input",{staticClass:"name-input",attrs:{type:"text",maxlength:"12","placeholder-style":"color:rgba(51,47,46,0.2)",placeholder:"请输入真实姓名",value:""},model:{value:e.form.memberName,callback:function(t){e.$set(e.form,"memberName",t)},expression:"form.memberName"}}),i("v-uni-view",{staticClass:"sex"},[i("v-uni-text",{staticClass:"sir",class:{"select-sex":e.sir},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.select(1)}}},[e._v("先生")]),i("v-uni-text",{staticClass:"madam",class:{"select-sex":e.madam},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.select(2)}}},[e._v("女士")])],1)],1)],1),i("v-uni-view",{staticClass:"form-row"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("生日")]),i("v-uni-picker",{attrs:{mode:"date",value:e.date},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindDateChange.apply(void 0,arguments)}},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}},[i("v-uni-view",{staticClass:"uni-input form-text"},[e._v(e._s(e.date))])],1)],1),i("v-uni-view",{staticClass:"form-row"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("手机")]),i("v-uni-view",{staticClass:"form-text"},[i("v-uni-input",{attrs:{type:"number","placeholder-style":"color:rgba(51,47,46,0.2)",placeholder:"请输入常用手机号",value:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),i("v-uni-view",{staticClass:"form-row"},[i("v-uni-view",{staticClass:"form-lable"},[e._v("密码")]),i("v-uni-view",{staticClass:"form-text"},[i("v-uni-input",{attrs:{type:"passward","placeholder-style":"color:rgba(51,47,46,0.2)",placeholder:"请设置6位支付密码",password:!0,value:""},model:{value:e.form.passward,callback:function(t){e.$set(e.form,"passward",t)},expression:"form.passward"}})],1)],1),i("v-uni-view",{staticClass:"form-row"},[i("v-uni-view",{staticClass:"form-text"},[i("v-uni-input",{attrs:{type:"",maxlength:"4","placeholder-style":"color:rgba(51,47,46,0.2)",placeholder:"请输入右侧图文验证码",value:""},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.init.apply(void 0,arguments)}}},[i("imgcode",{ref:"imgcode"})],1),e.codeVerify?e._e():i("v-uni-view",{staticClass:"verify"},[e._v("验证码错误")])],1),e._e(),i("v-uni-view",{staticClass:"submit"},[i("v-uni-button",{class:{slecet:e.objectValueAllEmpty,unSlecet:!e.objectValueAllEmpty},attrs:{disabled:!e.objectValueAllEmpty,loading:e.loading,type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.vipReg.apply(void 0,arguments)}}},[e._v("立即注册")])],1)],1)],1)},o=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}))},"5da4":function(e,t,a){"use strict";a.r(t);var i=a("cf96"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"61f2":function(e,t,a){"use strict";a.r(t);var i=a("e89e"),n=a("76ca");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("a0f4");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"39a826ae",null,!1,i["a"],r);t["default"]=c.exports},"76ca":function(e,t,a){"use strict";a.r(t);var i=a("985b"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},7959:function(e,t,a){e.exports=a.p+"static/img/tx.49ba6008.png"},"938c":function(e,t,a){"use strict";a.r(t);var i=a("2a14"),n=a("5da4");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("e4e3");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"19caa12c",null,!1,i["a"],r);t["default"]=c.exports},"985b":function(e,t,a){"use strict";a("cb29"),a("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{width:120,height:45}},mounted:function(){var e=this;setTimeout((function(){e.init()}),500)},methods:{init:function(){console.log("start");var e=uni.createCanvasContext("imgcanvas",this),t=this.width,a=this.height;e.setFillStyle("white"),e.setLineWidth(5),e.fillRect(0,0,t,a);for(var i=["1","2","3","4","5","6","7","8","9","0"],n="",o=0;o<4;o++){var r=i[this.rn(0,i.length-1)],s=this.rn(-30,30);e.setFontSize(18),e.setTextBaseline("top"),e.setFillStyle(this.rc(80,150)),e.save(),e.translate(30*o+15,parseInt(a/1.5)),e.rotate(s*Math.PI/180),e.fillText(r,-10,-15),e.restore(),n+=r}uni.setStorage({key:"imgcode",data:n});for(o=0;o<40;o++)e.beginPath(),e.arc(this.rn(0,t),this.rn(0,a),1,0,2*Math.PI),e.closePath(),e.setFillStyle(this.rc(150,200)),e.fill();e.draw(),console.log("end")},rc:function(e,t){var a=this.rn(e,t),i=this.rn(e,t),n=this.rn(e,t);return"rgb("+a+","+i+","+n+")"},rn:function(e,t){return parseInt(Math.random()*(e-t))+t},refresh:function(){this.init()},canvasIdErrorCallback:function(e){console.error(e.detail.errMsg)}}};t.default=i},"9ba1":function(e,t,a){var i=a("24fb"),n=a("1de5"),o=a("e84a");t=i(!1);var r=n(o);t.push([e.i,".login[data-v-19caa12c]{background-color:#fff}.head-inmage[data-v-19caa12c]{text-align:center;padding-top:%?30?%}.head-inmage .image-box[data-v-19caa12c]{display:inline-block;width:%?156?%;height:%?156?%;overflow:hidden;position:relative;vertical-align:middle}.head-inmage .image-box uni-image[data-v-19caa12c]{border-radius:50% 50%;width:100%;height:100%}.head-inmage .image-box .btn[data-v-19caa12c]{width:%?56?%;height:%?56?%;background:url("+r+");background-color:#fff;background-size:100% 100%;position:absolute;left:%?100?%;top:%?100?%;border-radius:50% 50%}.login-head .userName[data-v-19caa12c]{padding-top:%?20?%;height:%?45?%;font-size:%?32?%;font-weight:600}.unSlecet[data-v-19caa12c]{opacity:.2!important;background:#332f2e!important}.slecet[data-v-19caa12c]{background-color:#f63100}.login-form[data-v-19caa12c]{padding:%?60?% %?55?%}.login-form .form-row[data-v-19caa12c]{position:relative;background-color:#fafafa;height:%?88?%;line-height:%?88?%;margin-bottom:%?30?%;padding-left:%?44?%;display:-webkit-box;display:-webkit-flex;display:flex}.login-form .form-row .form-lable[data-v-19caa12c]{font-size:%?30?%;width:%?100?%;color:#332f2e}.login-form .form-row .code[data-v-19caa12c]{color:#fff;border-radius:0 %?68?% %?68?% 0;font-size:%?32?%;line-height:%?88?%}.login-form .form-row .name-input[data-v-19caa12c]{width:%?260?%}.login-form .form-row .form-text[data-v-19caa12c]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?88?%;line-height:%?88?%;font-size:%?30?%;color:#332f2e}.login-form .form-row .form-text uni-input[data-v-19caa12c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;height:%?88?%;line-height:%?88?%;color:#332f2e}.submit[data-v-19caa12c]{padding:%?30?% 0}.submit uni-button[data-v-19caa12c]{color:#fff;border-radius:%?44?% %?44?%}.sex[data-v-19caa12c]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?56?%;line-height:%?56?%;width:%?186?%;text-align:center;position:absolute;top:%?16?%;right:%?16?%;font-size:%?24?%;color:#979797;background-color:#fff;overflow:hidden;border-radius:%?78?% %?78?%}.sex .select-sex[data-v-19caa12c]{background:#feeae5!important;color:#f63100!important}.sex .sir[data-v-19caa12c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.sex .madam[data-v-19caa12c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.verify[data-v-19caa12c]{position:absolute;bottom:%?-60?%;color:#f63100;font-size:%?22?%}",""]),e.exports=t},a0f4:function(e,t,a){"use strict";var i=a("fc32"),n=a.n(i);n.a},cb29:function(e,t,a){var i=a("23e7"),n=a("81d5"),o=a("44d2");i({target:"Array",proto:!0},{fill:n}),o("fill")},cf96:function(e,t,a){"use strict";var i=a("ee27");a("99af"),a("4160"),a("b64b"),a("ac1f"),a("1276"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("f3f3")),o=a("2f62"),r=i(a("61f2")),s=a("1956"),c={components:{imgcode:r.default},data:function(){var e=this.getDate({format:!0});return{date:e,form:{memberName:"",birthday:e,phone:"",passward:"",code:""},birthday:0,loading:!1,phoneCode:"",headUrl:"",madam:!1,sir:!0,query:{}}},onLoad:function(e){console.log(e),this.headUrl=this.userInfo.headUrl,this.query=e},computed:(0,n.default)({},(0,o.mapState)(["userInfo"]),{codeVerify:function(){if(4===this.form.code.length)return this.form.code===uni.getStorageSync("imgcode")},startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")},objectValueAllEmpty:function(){var e=0,t=this.form;return Object.keys(t).forEach((function(a){null!=t[a]&&""!=t[a]&&(e++,!1)})),5===e}}),methods:{init:function(){this.$refs.imgcode.init(),this.form.code=""},vipReg:function(){var e=this;if(this.form.code!=uni.getStorageSync("imgcode"))return uni.showModal({title:"提示",content:"验证码错误",showCancel:!1}),!1;this.loading=!0;var t={openId:this.query.openId,birthday:this.birthday,sex:this.sir?1:2,appid:this.query.appid};Object.assign(this.form,t),s.http.post("/crm/registerMember",this.form).then((function(t){console.log(t),0===t.data.status?(uni.navigateTo({url:"../index/index?"+location.href.split("?")[1]}),uni.showToast({title:"注册完成",icon:"success",mask:!0})):uni.showModal({content:t.data.message,showCancel:!1}),e.loading=!1})).catch((function(t){e.loading=!1}))},upHeadImg:function(){var e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){e.headUrl=t.tempFilePaths[0],console.log(e.headUrl)}})},select:function(e){this.madam=2==e,this.sir=1==e},bindDateChange:function(e){var t=new Date(e.target.value);console.log(t.getTime(t)),this.birthday=t.getTime(t),this.date=e.target.value},getDate:function(e){var t=new Date,a=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(a,"-").concat(i,"-").concat(n)}}};t.default=c},d581:function(e,t,a){var i=a("9ba1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("f34ae7a2",i,!0,{sourceMap:!1,shadowMode:!1})},e4e3:function(e,t,a){"use strict";var i=a("d581"),n=a.n(i);n.a},e84a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAABGdBTUEAALGPC/xhBQAAAX1QTFRFdnNzS0lI+vr6paOjh4WFu7m58vLycG5sTktJcGxs8/PzSERDvLy8fXt78O7uhICARD8/eHZ1XFhYj4yMZ2RkvLu7tLSy5ubme3h4t7S0X11dube3y8vLYl9f9fX19/f3ZmJiX1xabmtrOjc1bGlp2dnXWFVTa2dn1dTUp6Wlz83Nr6+vo6Cg6OjoqKiniYeF19fXUE5NPDk5NzIyPzw8rKqqqqionZubqKel6enpoJ6dWldVoJ6eWFVV+Pj3YV1dREFBNTAwRkFBxcPDe3p43tzcX11c39/fRkNBOTU0lpSUYl9d4+Hh2traREE/8PDwyMjIPDk3gH19Pzo6397eNzU0/Pz8////////////////NzQy/f39////Qz8+////////////////////////////////////////////////////////////////////////////////OjU1////////QT48SEREPDc34eHhZ2ZkPjo5NDAvAAAA////yXj6RgAAAH90Uk5TmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZIWdojJmZIJlFXQMwkHWGSQaJFCyWAVAIPGp+gJkCjpmZmZmZmZkAme31lw8AAAJWSURBVEjHpZdne6JAFIVne++99957Te9t7S3ogkQxdg2wcdeb+e0xEso4FyTs+XRH5uVB5pYD2UKk5USpUNSrVb1YkMSchu0h3C95Ob1GGa2l5fxQsKToFJGulDxBrblOXbTe1NzBygb10EbFBazV6RDVaxjYaNGhajV4sNymPtQuD4LlVepLq2UWbLSpT7UbTrDWor7VqjnAOt2D6jZYoXtSxQQ1/tzPqZZO8Zmg7YJN7tIhUH/vagFOcpebBlji8vPwJITNeApOHOfyttQHFe6OUYjai2k4w21QdsA8V0dhmAzZq9Nn4SZXZfkeKFvLA+PdvgQQug4JkDCC+c/WVrkHZqxVZKLrKfhlbU1vEc3uE7DpfX5/OnY30UiKMuBoKLTfB0hzRGTBfQBjfkCRSCxIRkYOGqsbV2evT19yAyVSoOh/XL4FfV28goMFUkTBRxEYuzY3c/k8xOIoWCQ6BiYfw2J2J8hegHtZDNRJFQN/wkMzvAuvMbCKgz/grRk+hyUcRB91QU2a4eiHj/ijYi8nO2EnF32v4i8HPY5N+GaGc/AOPw4JA6Pw3QwX4Q2eACIGLkfUFSN6KsRe4SmXQxPgK3Q/9c4v+awDL1yS3KWsviSgszT7ANSXbmXlKGSmHleeCACJ+3E8ydNM6xgo5Nsz8TtuZSUzzcp/B+g3K7s9+gcVtiHD+F9PxTpsQ7ZGwDwM0VF2BFhDZ+rYP08dCQ8MncBjLvhgDT7KA5uH4HYluEEKbsmCm8DgtvM/jG5wa22Y+cygmc/4MPPGE6ecnw8p9PNhG8rMyg41pCiuAAAAAElFTkSuQmCC"},e89e:function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"canvas-img-code"},[a("v-uni-canvas",{style:{width:e.width+"px",height:e.height+"px"},attrs:{"canvas-id":"imgcanvas"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.canvasIdErrorCallback.apply(void 0,arguments)}}})],1)},o=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}))},fc32:function(e,t,a){var i=a("00f8");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("52ed361f",i,!0,{sourceMap:!1,shadowMode:!1})}}]);