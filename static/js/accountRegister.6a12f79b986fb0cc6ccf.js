webpackJsonp([25],{"5XXQ":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.view-register-container .register-wrap[data-v-3dcd7d22] {\n  width: 350px;\n}\n.view-register-container .el-form-item[data-v-3dcd7d22] {\n  border-bottom: 1px solid #e5e5e5;\n}\n.view-register-container .el-form-item.is-focus[data-v-3dcd7d22] {\n    border-bottom: 1px solid #3399ff;\n}\n.view-register-container .register-free-register[data-v-3dcd7d22] {\n  line-height: 19px;\n}\n.view-register-container .el-button[data-v-3dcd7d22] {\n  height: 45px;\n}\n.view-register-container .account-main-left[data-v-3dcd7d22] {\n  width: 500px;\n}\n.view-register-container .eye-icon[data-v-3dcd7d22] {\n  top: 5px;\n  right: 8px;\n  width: 25px;\n  height: 25px;\n}\n.view-register-container .eye-icon svg[data-v-3dcd7d22] {\n    width: 100%;\n    height: 100%;\n    color: #D7D7D7;\n}\n.view-register-container .protocol[data-v-3dcd7d22] {\n  color: #3399FF;\n}\n.view-register-container .read-btn[data-v-3dcd7d22] {\n  margin-left: 3px;\n}\n.view-register-container .account-main-right[data-v-3dcd7d22] {\n  width: 400px;\n}\n.view-register-container .account-main-right .account-download[data-v-3dcd7d22] {\n    display: block;\n    width: 200px;\n    height: 275px;\n    padding: 20px;\n    margin-left: 50px;\n    text-align: center;\n    background-color: #f0f0f0;\n}\n.view-register-container .msg-box[data-v-3dcd7d22] {\n  padding-right: 100px;\n}\n.view-register-container .orgin-input[data-v-3dcd7d22] {\n  padding-left: 13px;\n}\n.view-register-container .orgin-input[data-v-3dcd7d22]::-webkit-input-placeholder {\n  color: #c0c4cc;\n}\n.view-register-container .orgin-input[data-v-3dcd7d22]::-moz-placeholder {\n  color: #c0c4cc;\n}\n.view-register-container .orgin-input[data-v-3dcd7d22]:-ms-input-placeholder {\n  color: #c0c4cc;\n}\n.view-register-container .code-btn[data-v-3dcd7d22] {\n  color: #D7D7D7;\n  position: absolute;\n  right: 0;\n  top: 0px;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.view-register-container .code-btn.active[data-v-3dcd7d22] {\n    cursor: pointer;\n    color: #3399FF;\n    pointer-events: unset;\n}\n",""])},Ik6R:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("dmRH"),n("+BTi");var i=n("EKTV"),o={components:{elCheckbox:n.n(i).a},data:function(){return{form:{mobile:"",identifyingCode:"",password:""},rules:{mobile:[{validator:function(e,t,n){""===t&&n(new Error("请输入手机号")),n()},trigger:"blur"},{pattern:"mobile",validator:this.validator,trigger:"blur"}],identifyingCode:[{validator:function(e,t,n){""===t?n(new Error("请填写短信验证码")):6!==t.length&&n(new Error("验证码必须为6位")),n()},trigger:"blur"}],password:[{validator:function(e,t,n){""===t&&n(new Error("请输入密码")),n()},trigger:"blur"}]},isInputFocus:{mobile:!1,identifyingCode:!1,password:!1},checked:!0,isShowPassword:!1,isShowIdentifyCode:!1,content:"发送验证码",totalTime:61}},computed:{passwordType:function(){return this.isShowPassword?"text":"password"}},mounted:function(){},methods:{registerUser:function(){var e=this,t={password:this.form.password,userName:this.form.mobile,verificationCode:this.form.identifyingCode};this.API.account.registerUser(t).then(function(t){t&&e.$message.success("注册成功")})},inputFocus:function(e){this.isInputFocus[e]=!0},inputBlur:function(e){this.isInputFocus[e]=!1},mobileChange:function(){var e=this;this.$refs.registerForm.validateField(["mobile"],function(t){!t&&e.totalTime>60?e.isShowIdentifyCode=!0:e.isShowIdentifyCode=!1})},countDown:function(){var e=this;if(this.totalTime<60)return!1;var t={mobile:this.form.mobile,verificationCodeType:1};this.API.account.sendVerificationCode(t).then(function(t){t&&e.$message.success("已发送验证码")}),this.isShowIdentifyCode=!1;var n=window.setInterval(function(){0===e.totalTime&&(e.isShowIdentifyCode=!0,e.totalTime=61,e.content="发送验证码",clearInterval(n)),e.totalTime--,e.content=e.totalTime+"s后重新发送"},1e3)}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view-register-container"},[n("div",{staticClass:"account-main-left fl"},[n("div",{staticClass:"register-wrap fr"},[n("el-form",{ref:"registerForm",staticClass:"mt20",attrs:{"label-width":"100px","label-position":"left",model:e.form,rules:e.rules}},[n("el-form-item",{class:{"is-focus":e.isInputFocus.mobile},attrs:{prop:"mobile",label:"手机号码"}},[n("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"fakeusernameremembered"}}),e._v(" "),n("input",{staticStyle:{display:"none"},attrs:{type:"password",name:"fakepasswordremembered"}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.mobile,expression:"form.mobile"}],staticClass:"orgin-input",attrs:{maxlength:"11",placeholder:"今后用手机登录","auto-complete":"new-password"},domProps:{value:e.form.mobile},on:{focus:function(t){e.inputFocus("mobile")},blur:function(t){e.inputBlur("mobile")},keyup:e.mobileChange,input:function(t){t.target.composing||e.$set(e.form,"mobile",t.target.value)}}})]),e._v(" "),n("el-form-item",{staticClass:"pt40",class:{"is-focus":e.isInputFocus.identifyingCode},attrs:{prop:"identifyingCode",label:"短信验证码"}},[n("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"fakeusernameremembered"}}),e._v(" "),n("input",{staticStyle:{display:"none"},attrs:{type:"password",name:"fakepasswordremembered"}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.identifyingCode,expression:"form.identifyingCode"}],staticClass:"msg-box orgin-input",attrs:{type:"text",maxlength:"6","auto-complete":"new-password",placeholder:"填写6位短信验证码"},domProps:{value:e.form.identifyingCode},on:{focus:function(t){e.inputFocus("identifyingCode")},blur:function(t){e.inputBlur("identifyingCode")},input:function(t){t.target.composing||e.$set(e.form,"identifyingCode",t.target.value)}}}),e._v(" "),n("div",{staticClass:"code-btn",class:{active:e.isShowIdentifyCode},on:{click:e.countDown}},[e._v(e._s(e.content))])]),e._v(" "),n("el-form-item",{staticClass:"pt40",class:{"is-focus":e.isInputFocus.password},attrs:{prop:"password",label:"设置密码"}},[n("div",{staticClass:"pr"},[n("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"fakeusernameremembered"}}),e._v(" "),n("input",{staticStyle:{display:"none"},attrs:{type:"password",name:"fakepasswordremembered"}}),e._v(" "),"checkbox"===e.passwordType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"orgin-input",attrs:{placeholder:"8-16位密码，包含数字、字母",maxlength:"16",minlength:"8","auto-complete":"false",type:"checkbox"},domProps:{checked:Array.isArray(e.form.password)?e._i(e.form.password,null)>-1:e.form.password},on:{focus:function(t){e.inputFocus("password")},blur:function(t){e.inputBlur("password")},change:function(t){var n=e.form.password,i=t.target,o=!!i.checked;if(Array.isArray(n)){var r=e._i(n,null);i.checked?r<0&&e.$set(e.form,"password",n.concat([null])):r>-1&&e.$set(e.form,"password",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.form,"password",o)}}}):"radio"===e.passwordType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"orgin-input",attrs:{placeholder:"8-16位密码，包含数字、字母",maxlength:"16",minlength:"8","auto-complete":"false",type:"radio"},domProps:{checked:e._q(e.form.password,null)},on:{focus:function(t){e.inputFocus("password")},blur:function(t){e.inputBlur("password")},change:function(t){e.$set(e.form,"password",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"orgin-input",attrs:{placeholder:"8-16位密码，包含数字、字母",maxlength:"16",minlength:"8","auto-complete":"false",type:e.passwordType},domProps:{value:e.form.password},on:{focus:function(t){e.inputFocus("password")},blur:function(t){e.inputBlur("password")},input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),n("input",{staticStyle:{display:"none"},attrs:{type:"text"}}),e._v(" "),n("input",{staticStyle:{position:"fixed",bottom:"-9999px"},attrs:{type:"password",name:"clear"}}),e._v(" "),n("a",{staticClass:"pa eye-icon",on:{click:function(t){e.isShowPassword=!e.isShowPassword}}},[n("svg-icon",{directives:[{name:"show",rawName:"v-show",value:!e.isShowPassword,expression:"!isShowPassword"}],attrs:{"icon-class":"close_eye"}}),e._v(" "),n("svg-icon",{directives:[{name:"show",rawName:"v-show",value:e.isShowPassword,expression:"isShowPassword"}],attrs:{"icon-class":"open_eye"}})],1)])]),e._v(" "),n("div",{staticClass:"mt40"},[n("a",{on:{click:function(t){e.checked=!e.checked}}},[n("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),n("span",{staticClass:"read-btn"},[e._v("我已阅读并同意")])],1),e._v(" "),n("a",{staticClass:"ml5  protocol"},[e._v("《美其零用户使用协议》")])])],1),e._v(" "),n("router-link",{attrs:{to:"/account/creatStore"}},[n("el-button",{staticClass:"w100p mt20",attrs:{type:"primary"},on:{click:e.registerUser}},[e._v("确认注册")])],1),e._v(" "),n("router-link",{attrs:{to:"/account/login"}},[n("div",{staticClass:"fr mt20 cp"},[e._v("已有账号，立即登录")])])],1)]),e._v(" "),e._m(0)])},s=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"account-main-right fr"},[t("a",{staticClass:"account-download"},[t("img",{staticClass:"wh100p",attrs:{src:n("gLJ3"),alt:""}})])])}];r._withStripped=!0;var a={render:r,staticRenderFns:s},c=a;var d=!1;var l=n("VU/8")(o,c,!1,function(e){d||(n("XB7K"),n("nQEg"))},"data-v-3dcd7d22",null);l.options.__file="src/views/account/register/index.vue";t.default=l.exports},WAFY:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.view-register-container .el-input__inner {\n  border: 0;\n}\n.view-register-container .el-form-item__label {\n  line-height: 31px;\n}\n.view-register-container .el-form-item__content .el-input {\n  margin-bottom: 0;\n}\n.view-register-container .el-form-item--small .el-form-item__error {\n  padding-top: 10px;\n  text-indent: 15px;\n}\n",""])},XB7K:function(e,t,n){var i=n("5XXQ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("1426ed78",i,!1,{})},nQEg:function(e,t,n){var i=n("WAFY");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("3ee47416",i,!1,{})}});