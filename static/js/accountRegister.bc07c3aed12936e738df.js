webpackJsonp([25],{GdXm:function(t,e,n){var i=n("vUnH");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("4e0ec5e9",i,!1,{})},Ik6R:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("dmRH"),n("+BTi");var i=n("EKTV"),o={components:{elCheckbox:n.n(i).a},data:function(){return{form:{mobile:"",identifyingCode:"",password:""},rules:{mobile:[{validator:function(t,e,n){""===e&&n(new Error("请输入手机号")),n()},trigger:"blur"},{pattern:"mobile",validator:this.validator,trigger:"blur"}],identifyingCode:[{validator:function(t,e,n){""===e?n(new Error("请填写短信验证码")):6!==e.length&&n(new Error("验证码必须为6位")),n()},trigger:"blur"}],password:[{validator:function(t,e,n){""===e&&n(new Error("请输入密码")),n()},trigger:"blur"}]},isInputFocus:{mobile:!1,identifyingCode:!1,password:!1},checked:!0,isShowPassword:!1,isShowIdentifyCode:!1,content:"发送验证码",totalTime:60}},computed:{passwordType:function(){return this.isShowPassword?"text":"password"}},mounted:function(){},methods:{inputFocus:function(t){this.isInputFocus[t]=!0},inputBlur:function(t){this.isInputFocus[t]=!1},mobileChange:function(){var t=this;this.$refs.registerForm.validateField(["mobile"],function(e){t.isShowIdentifyCode=!e})},countDown:function(){var t=this;if(this.totalTime<60)return!1;var e=window.setInterval(function(){0===t.totalTime&&(clearInterval(e),t.totalTime=60,t.isShowIdentifyCode=!0),t.totalTime--,t.content=t.totalTime+"s后重新发送"},1e3)}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-register-container"},[n("div",{staticClass:"account-main-left fl"},[n("div",{staticClass:"register-wrap fr"},[n("el-form",{ref:"registerForm",staticClass:"mt20",attrs:{"label-width":"100px","label-position":"left",model:t.form,rules:t.rules}},[n("el-form-item",{class:{"is-focus":t.isInputFocus.mobile},attrs:{prop:"mobile",label:"手机号码"}},[n("el-input",{attrs:{maxlength:"11",placeholder:"今后用手机登录"},on:{focus:function(e){t.inputFocus("mobile")},blur:function(e){t.inputBlur("mobile")}},nativeOn:{keyup:function(e){return t.mobileChange(e)}},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),t._v(" "),n("el-form-item",{staticClass:"pt40",class:{"is-focus":t.isInputFocus.identifyingCode},attrs:{prop:"identifyingCode",label:"短信验证码"}},[n("el-input",{attrs:{type:"text",maxlength:"6",placeholder:"填写6位短信验证码"},on:{focus:function(e){t.inputFocus("identifyingCode")},blur:function(e){t.inputBlur("identifyingCode")}},model:{value:t.form.identifyingCode,callback:function(e){t.$set(t.form,"identifyingCode",e)},expression:"form.identifyingCode"}}),t._v(" "),n("div",{staticClass:"code-btn",class:{active:t.isShowIdentifyCode},on:{click:t.countDown}},[t._v(t._s(t.content))])],1),t._v(" "),n("el-form-item",{staticClass:"pt40",class:{"is-focus":t.isInputFocus.password},attrs:{prop:"password",label:"设置密码"}},[n("div",{staticClass:"pr"},[n("el-input",{attrs:{type:t.passwordType,placeholder:"8-16位密码，包含数字、字母"},on:{focus:function(e){t.inputFocus("password")},blur:function(e){t.inputBlur("password")}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),n("a",{staticClass:"pa eye-icon",on:{click:function(e){t.isShowPassword=!t.isShowPassword}}},[n("svg-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isShowPassword,expression:"!isShowPassword"}],attrs:{"icon-class":"close_eye"}}),t._v(" "),n("svg-icon",{directives:[{name:"show",rawName:"v-show",value:t.isShowPassword,expression:"isShowPassword"}],attrs:{"icon-class":"open_eye"}})],1)],1)]),t._v(" "),n("div",{staticClass:"mt40"},[n("a",{on:{click:function(e){t.checked=!t.checked}}},[n("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._v(" "),n("span",{staticClass:"read-btn"},[t._v("我已阅读并同意")])],1),t._v(" "),n("a",{staticClass:"ml5  protocol"},[t._v("《美其零用户使用协议》")])])],1),t._v(" "),n("router-link",{attrs:{to:"/account/creatStore"}},[n("el-button",{staticClass:"w100p mt20",attrs:{type:"primary"}},[t._v("确认注册")])],1),t._v(" "),n("router-link",{attrs:{to:"/account/login"}},[n("div",{staticClass:"fr mt20 cp"},[t._v("已有账号，立即登录")])])],1)]),t._v(" "),t._m(0)])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"account-main-right fr"},[e("a",{staticClass:"account-download"},[e("img",{staticClass:"wh100p",attrs:{src:n("gLJ3"),alt:""}})])])}];r._withStripped=!0;var a={render:r,staticRenderFns:s},c=a;var d=!1;var l=n("VU/8")(o,c,!1,function(t){d||(n("GdXm"),n("YXow"))},"data-v-3dcd7d22",null);l.options.__file="src/views/account/register/index.vue";e.default=l.exports},YXow:function(t,e,n){var i=n("vQSa");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("2e22d169",i,!1,{})},vQSa:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.view-register-container .el-input__inner {\n  border: 0;\n}\n.view-register-container .el-form-item__label {\n  line-height: 31px;\n}\n.view-register-container .el-form-item__content .el-input {\n  margin-bottom: 0;\n}\n.view-register-container .el-form-item--small .el-form-item__error {\n  padding-top: 10px;\n  text-indent: 15px;\n}\n",""])},vUnH:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.view-register-container .register-wrap[data-v-3dcd7d22] {\n  width: 350px;\n}\n.view-register-container .el-form-item[data-v-3dcd7d22] {\n  border-bottom: 1px solid #e5e5e5;\n}\n.view-register-container .el-form-item.is-focus[data-v-3dcd7d22] {\n    border-bottom: 1px solid #3399ff;\n}\n.view-register-container .register-free-register[data-v-3dcd7d22] {\n  line-height: 19px;\n}\n.view-register-container .el-button[data-v-3dcd7d22] {\n  height: 45px;\n}\n.view-register-container .account-main-left[data-v-3dcd7d22] {\n  width: 500px;\n}\n.view-register-container .eye-icon[data-v-3dcd7d22] {\n  top: 5px;\n  right: 8px;\n  width: 25px;\n  height: 25px;\n}\n.view-register-container .eye-icon svg[data-v-3dcd7d22] {\n    width: 100%;\n    height: 100%;\n    color: #D7D7D7;\n}\n.view-register-container .protocol[data-v-3dcd7d22] {\n  color: #3399FF;\n}\n.view-register-container .read-btn[data-v-3dcd7d22] {\n  margin-left: 3px;\n}\n.view-register-container .account-main-right[data-v-3dcd7d22] {\n  width: 400px;\n}\n.view-register-container .account-main-right .account-download[data-v-3dcd7d22] {\n    display: block;\n    width: 200px;\n    height: 275px;\n    padding: 20px;\n    margin-left: 50px;\n    text-align: center;\n    background-color: #f0f0f0;\n}\n.view-register-container .code-btn[data-v-3dcd7d22] {\n  color: #D7D7D7;\n  position: absolute;\n  right: 0;\n  top: 0px;\n}\n.view-register-container .code-btn.active[data-v-3dcd7d22] {\n    color: #3399FF;\n    cursor: pointer;\n}\n",""])}});