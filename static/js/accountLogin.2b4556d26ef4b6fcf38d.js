webpackJsonp([27],{"1gO9":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("dmRH"),e("+BTi");var i=e("EKTV"),o={components:{elCheckbox:e.n(i).a},data:function(){return{form:{mobile:"",password:""},rules:{mobile:[{validator:function(t,n,e){""===n&&e(new Error("请输入手机号")),e()},trigger:"blur"},{pattern:"mobile",validator:this.validator}],password:[{validator:function(t,n,e){""===n&&e(new Error("请输入密码")),e()},trigger:"blur"}]},isInputFocus:{mobile:!1,password:!1},checked:!0,enterType:0}},mounted:function(){this.init()},methods:{init:function(){var t=this.cookies.get("isAutoLogin");this.cookies.get("AUTH_TOKEN")&&(this.autoLogin(),t&&this.$router.push({name:"storeChoose"}))},login:function(){var t=this;this.$refs.form.validate(function(n){if(n){var e={userName:t.form.mobile,password:t.form.password};t.API.account.getLoginData(e).then(function(n){t.cookies.set("AUTH_TOKEN",n),t.$router.push({path:"/store/choose"}),t.autoLogin()})}})},inputFocus:function(t){this.isInputFocus[t]=!0},inputBlur:function(t){this.isInputFocus[t]=!1},autoLogin:function(){this.checked?this.cookies.set("isAutoLogin",!0,{expires:7}):this.cookies.remove("isAutoLogin")}}},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"view-login-container"},[i("div",{staticClass:"account-main-left fl"},[i("div",{staticClass:"login-wrap fr"},[i("div",{staticClass:"login-type"},[i("span",{class:{cp:0===t.enterType},on:{click:function(n){t.enterType=0}}},[t._v("手机登录")]),t._v(" "),i("span",{staticClass:"ml20",class:{cp:1===t.enterType},on:{click:function(n){t.enterType=1}}},[t._v("扫码登录")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.enterType,expression:"enterType===0"}],staticClass:"login-mobile-enter"},[i("el-form",{ref:"form",staticClass:"mt20",attrs:{model:t.form,rules:t.rules,"label-width":"86px"}},[i("el-form-item",{class:{"is-focus":t.isInputFocus.mobile},attrs:{prop:"mobile",label:"手机号码"}},[i("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"fakeusernameremembered"}}),t._v(" "),i("input",{staticStyle:{display:"none"},attrs:{type:"password",name:"fakepasswordremembered"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"orgin-input",attrs:{maxlength:"11","auto-complete":"new-password",placeholder:"注册时填写的手机号"},domProps:{value:t.form.mobile},on:{focus:function(n){t.inputFocus("mobile")},blur:function(n){t.inputBlur("mobile")},input:function(n){n.target.composing||t.$set(t.form,"mobile",n.target.value)}}}),t._v(" "),i("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"fakeusernameremembered"}}),t._v(" "),i("input",{staticStyle:{display:"none"},attrs:{type:"password",name:"fakepasswordremembered"}})]),t._v(" "),i("el-form-item",{staticClass:"pt40",class:{"is-focus":t.isInputFocus.password},attrs:{prop:"password",label:"登录密码"}},[i("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},on:{focus:function(n){t.inputFocus("password")},blur:function(n){t.inputBlur("password")}},model:{value:t.form.password,callback:function(n){t.$set(t.form,"password",n)},expression:"form.password"}}),t._v(" "),i("input",{staticStyle:{display:"none"},attrs:{type:"text"}}),t._v(" "),i("input",{staticStyle:{position:"fixed",bottom:"-9999px"},attrs:{type:"password",name:"clear"}})],1),t._v(" "),i("div",{staticClass:"mt40 table-between"},[i("el-checkbox",{staticClass:"fl",on:{change:t.autoLogin},model:{value:t.checked,callback:function(n){t.checked=n},expression:"checked"}},[t._v("三天内自动登录")]),t._v(" "),i("router-link",{attrs:{to:"/account/retrievePassword"}},[i("span",{staticClass:"cp login-free-register"},[t._v("忘记密码")])])],1)],1),t._v(" "),i("el-button",{staticClass:"w100p mt20",attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")]),t._v(" "),i("router-link",{attrs:{to:"/account/register"}},[i("div",{staticClass:"fr mt20 cp"},[t._v("免费注册")])])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.enterType,expression:"enterType===1"}],staticClass:"login-qrcode-enter"},[i("img",{attrs:{src:e("gmrr"),alt:""}})])])]),t._v(" "),t._m(0)])},s=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"account-main-right fr"},[n("a",{staticClass:"account-download"},[n("img",{staticClass:"wh100p",attrs:{src:e("gLJ3"),alt:""}})])])}];a._withStripped=!0;var r={render:a,staticRenderFns:s},c=r;var l=!1;var A=e("VU/8")(o,c,!1,function(t){l||e("o/tL")},"data-v-d26d7ac0",null);A.options.__file="src/views/account/login/index.vue";n.default=A.exports},fuhT:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.view-login-container[data-v-d26d7ac0] {\n  margin-top: 20px;\n}\n.view-login-container .login-wrap[data-v-d26d7ac0] {\n    width: 350px;\n}\n.view-login-container .login-wrap .login-type > span[data-v-d26d7ac0] {\n      cursor: pointer;\n}\n.view-login-container .login-wrap .login-qrcode-enter[data-v-d26d7ac0] {\n      margin-top: 20px;\n}\n.view-login-container .el-form-item[data-v-d26d7ac0] {\n    border-bottom: 1px solid #e5e5e5;\n}\n.view-login-container .el-form-item.is-focus[data-v-d26d7ac0] {\n      border-bottom: 1px solid #3399ff;\n}\n.view-login-container .orgin-input[data-v-d26d7ac0] {\n    padding-left: 13px;\n}\n.view-login-container .orgin-input[data-v-d26d7ac0]::-webkit-input-placeholder {\n    color: #c0c4cc;\n}\n.view-login-container .orgin-input[data-v-d26d7ac0]::-moz-placeholder {\n    color: #c0c4cc;\n}\n.view-login-container .orgin-input[data-v-d26d7ac0]:-ms-input-placeholder {\n    color: #c0c4cc;\n}\n.view-login-container .login-free-register[data-v-d26d7ac0] {\n    line-height: 19px;\n}\n.view-login-container .el-button[data-v-d26d7ac0] {\n    height: 45px;\n}\n.view-login-container .account-main-left[data-v-d26d7ac0] {\n    width: 500px;\n}\n.view-login-container .account-main-right[data-v-d26d7ac0] {\n    width: 400px;\n}\n.view-login-container .account-main-right .account-download[data-v-d26d7ac0] {\n      display: block;\n      width: 200px;\n      height: 275px;\n      padding: 20px;\n      margin-left: 50px;\n      text-align: center;\n      background-color: #f0f0f0;\n}\n.view-login-container[data-v-d26d7ac0] .el-form-item__label {\n    line-height: 31px;\n}\n.view-login-container[data-v-d26d7ac0] .el-form-item__content .el-input {\n    margin-bottom: 0;\n}\n.view-login-container[data-v-d26d7ac0] .el-input__inner {\n    border: 0;\n}\n.view-login-container[data-v-d26d7ac0] .el-form-item--small .el-form-item__error {\n    padding-top: 10px;\n    text-indent: 15px;\n}\n",""])},gmrr:function(t,n){t.exports="data:image/png;base64,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"},"o/tL":function(t,n,e){var i=e("fuhT");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("41cdfcf3",i,!1,{})}});