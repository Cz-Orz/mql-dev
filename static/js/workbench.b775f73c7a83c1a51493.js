webpackJsonp([38],{CsNA:function(t,n,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.view-workbench-container[data-v-532e156c] {\n  height: 100%;\n}\n.view-workbench-container .workbench-wrap .title[data-v-532e156c] {\n    border-left: 5px solid #3696fc;\n}\n.view-workbench-container .workbench-wrap .content .list .list-item[data-v-532e156c] {\n    width: 214px;\n    height: 62px;\n    line-height: 62px;\n    background-color: #f2f2f2;\n    cursor: pointer;\n}\n.view-workbench-container .workbench-wrap .content .list .list-item .icon[data-v-532e156c] {\n      color: #3696fc;\n      font-size: 35px;\n      line-height: 35px;\n      vertical-align: -0.30em;\n}\n.view-workbench-container .workbench-wrap .content .content-top[data-v-532e156c] {\n    width: 1036px;\n    height: 97px;\n    background-color: #f2f2f2;\n}\n.view-workbench-container .workbench-wrap .content .content-bottom[data-v-532e156c] {\n    width: 1036px;\n    height: 97px;\n}\n.view-workbench-container .workbench-wrap .content .content-bottom .content-bottom-left[data-v-532e156c] {\n      width: 335px;\n      height: 97px;\n      background-color: #f2f2f2;\n}\n.view-workbench-container .workbench-wrap .content .content-bottom .content-bottom-right[data-v-532e156c] {\n      width: 691px;\n      height: 97px;\n      background-color: #e4e4e4;\n}\n.view-workbench-container .f18[data-v-532e156c] {\n    font-size: 18px;\n}\n.view-workbench-container .fc-1[data-v-532e156c] {\n    color: #CC0099;\n}\n.view-workbench-container .fc-2[data-v-532e156c] {\n    color: #CC0033;\n}\n.view-workbench-container .fc-3[data-v-532e156c] {\n    color: #3696fc;\n}\n.view-workbench-container .fc-4[data-v-532e156c] {\n    color: #A1A1A1;\n}\n.view-workbench-container .bl[data-v-532e156c] {\n    border-left: 3px solid #cc0033;\n}\n.view-workbench-container .br[data-v-532e156c] {\n    border-right: 1px solid #c3c3c3;\n}\n.view-workbench-container .w-ratio33[data-v-532e156c] {\n    width: 33.33%;\n}\n.view-workbench-container .w-ratio50[data-v-532e156c] {\n    width: 50%;\n}\n.view-workbench-container .w-ratio25[data-v-532e156c] {\n    width: 25%;\n}\n.view-workbench-container .pt25[data-v-532e156c] {\n    padding-top: 25px;\n}\n",""])},F2UR:function(t,n,a){var e=a("CsNA");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("724b0f76",e,!1,{})},za4p:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={components:{MqlAddMember:a("vvam").a},data:function(){return{addVisible:!1,shortcutEntryLists:[{name:"快速开单",icon:"opening_order",path:"/bill/indvidual",mold:"page",target:"_blank"},{name:"新增会员",icon:"member",path:"",mold:"popup",operation:"addMember"}],backLogLists:[{name:"订单",type:"待付款",number:"8",unit:"笔",path:"/home/order/list",mold:"page",target:"_self"}],inCome:"2000.00",rechargeAmount:"1000.00",membershipCardConsumptionAmount:"1000.00",membershipCardConsumptionCount:"100",rechargeBalance:"10000.00",subCardBalance:"1000",orderMumber:"100",newFanMembers:"100",newHandleCardMembers:"50"}},mounted:function(){},methods:{jumpPage:function(t){"page"===t.mold&&"_self"===t.target&&this.$router.push(t.path),"page"===t.mold&&"_blank"===t.target&&window.open(location.origin+"/#"+t.path),"popup"===t.mold&&this[t.operation]()},addMember:function(){this.addVisible=!0}}},s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"view-workbench-container"},[a("div",{staticClass:"workbench-wrap pt20"},[a("div",{staticClass:"title fc-4 ml20 mb15 f14 pl10"},[t._v("常用功能")]),t._v(" "),a("div",{staticClass:"content mb40"},[a("div",{staticClass:"list clear"},t._l(t.shortcutEntryLists,function(n,e){return a("div",{key:e,staticClass:"list-item fl ml20 mr20 tc",on:{click:function(a){t.jumpPage(n)}}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":n.icon}}),t._v(" "),a("span",{staticClass:"f16 ml10"},[t._v(t._s(n.name))])],1)}))])]),t._v(" "),a("div",{staticClass:"workbench-wrap"},[a("div",{staticClass:"title fc-4 ml20 mb15 f14 pl10"},[t._v("代办事项")]),t._v(" "),a("div",{staticClass:"content mb40"},[a("div",{staticClass:"list clear"},t._l(t.backLogLists,function(n,e){return a("div",{key:e,staticClass:"list-item fl ml20 mr20 tc bl",on:{click:function(a){t.jumpPage(n)}}},[a("span",{staticClass:"f16"},[t._v(t._s(n.name)+"-"),a("i",{staticClass:"fc-3"},[t._v(t._s(n.type))])]),t._v(" "),a("span",{staticClass:"f16 fc-1 ml50"},[t._v(t._s(n.number)+t._s(n.unit))])])}))])]),t._v(" "),a("div",{staticClass:"workbench-wrap"},[a("div",{staticClass:"title fc-4 ml20 mb15 f14 pl10"},[t._v("门店今日概览")]),t._v(" "),a("div",{staticClass:"content clear"},[a("div",{staticClass:"content-top fl ml20 mb15 pt20"},[a("div",{staticClass:"w-ratio25 tc fl br"},[a("p",{staticClass:"fc-4 f14"},[a("span",[t._v("收入")]),t._v(" "),a("el-tooltip",{staticClass:"item fc-4",attrs:{effect:"dark",content:"收入 = 智慧支付+现金+银联刷卡+支付宝+微信+团购",placement:"top-start"}},[a("i",{staticClass:"el-icon-question"})])],1),t._v(" "),a("p",{staticClass:"f18 mt20 fc-1"},[t._v(t._s(t.inCome))])]),t._v(" "),a("div",{staticClass:"w-ratio25 tc fl br"},[a("p",{staticClass:"fc-4 f14"},[a("span",[t._v("充值金额")]),t._v(" "),a("el-tooltip",{staticClass:"item fc-4",attrs:{effect:"dark",content:"向会员充值卡所充金额的总和",placement:"top-start"}},[a("i",{staticClass:"el-icon-question"})])],1),t._v(" "),a("p",{staticClass:"f18 mt20 fc-1"},[t._v(t._s(t.rechargeAmount))])]),t._v(" "),a("div",{staticClass:"w-ratio25 tc fl br"},[a("p",{staticClass:"fc-4 f14"},[t._v("耗卡金额")]),t._v(" "),a("p",{staticClass:"f18 mt20 fc-1"},[t._v(t._s(t.membershipCardConsumptionAmount))])]),t._v(" "),a("div",{staticClass:"w-ratio25 tc fl"},[a("p",{staticClass:"fc-4 f14"},[t._v("耗卡次数")]),t._v(" "),a("p",{staticClass:"f18 mt20 fc-2"},[t._v(t._s(t.membershipCardConsumptionCount))])])]),t._v(" "),a("div",{staticClass:"content-bottom fl ml20 mb15"},[a("div",{staticClass:"content-bottom-left fl pt20"},[a("div",{staticClass:"w-ratio50 tc fl br"},[a("p",{staticClass:"fc-4 f14"},[a("span",[t._v("充值余额")]),t._v(" "),a("el-tooltip",{staticClass:"item fc-4",attrs:{effect:"dark",content:"门店截止当前所有充值卡余额总和",placement:"top-start"}},[a("i",{staticClass:"el-icon-question"})])],1),t._v(" "),a("p",{staticClass:"f18 mt20"},[t._v(t._s(t.rechargeBalance))])]),t._v(" "),a("div",{staticClass:"w-ratio50 tc fl"},[a("p",{staticClass:"fc-4 f14"},[a("span",[t._v("次卡余额")]),t._v(" "),a("el-tooltip",{staticClass:"item fc-4",attrs:{effect:"dark",content:"门店截止当前所有次卡剩余次数总和",placement:"top-start"}},[a("i",{staticClass:"el-icon-question"})])],1),t._v(" "),a("p",{staticClass:"f18 mt20"},[t._v(t._s(t.subCardBalance))])])]),t._v(" "),a("div",{staticClass:"content-bottom-right fl pt20 ml10"},[a("div",{staticClass:"w-ratio33 tc fl br"},[a("p",{staticClass:"fc-4 f14"},[t._v("订单数")]),t._v(" "),a("p",{staticClass:"f18 mt20"},[t._v(t._s(t.orderMumber))])]),t._v(" "),a("div",{staticClass:"w-ratio33 tc fl br"},[a("p",{staticClass:"fc-4 f14"},[t._v("新增粉丝会员")]),t._v(" "),a("p",{staticClass:"f18 mt20"},[t._v(t._s(t.newFanMembers))])]),t._v(" "),a("div",{staticClass:"w-ratio33 tc fl"},[a("p",{staticClass:"fc-4 f14"},[t._v("新增开卡会员")]),t._v(" "),a("p",{staticClass:"f18 mt20"},[t._v(t._s(t.newHandleCardMembers))])])])])])]),t._v(" "),a("mql-add-member",{model:{value:t.addVisible,callback:function(n){t.addVisible=n},expression:"addVisible"}})],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[]},c=i;var o=!1;var r=a("VU/8")(e,c,!1,function(t){o||a("F2UR")},"data-v-532e156c",null);r.options.__file="src/views/home/workbench/index.vue";n.default=r.exports}});