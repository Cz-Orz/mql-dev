webpackJsonp([37],{"6vg8":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});s("ylrw"),s("+BTi");var l=s("6oiW"),a=s.n(l),e=(s("Dte2"),s("q4le")),n=s.n(e),c=(s("isE6"),s("LR6y")),d=s.n(c),r=(s("isgN"),s("tLa+")),o=s.n(r),v={components:{timeFilter:s("m/bL").a,elDatePicker:o.a,elTable:d.a,elTableColumn:n.a,elPagination:a.a},data:function(){return{receiptMan:"",currentPage4:4,tableData:[{date:"2018-12-12 20:08:08",serNumber:"P20181022123456001",orderID:"D20181022123456001",payMethod:"智慧支付",monney:"400.00",outsideId:"F201810223546001",receiver:"02 刘娜"},{date:"2018-12-12 20:08:08",serNumber:"P20181022123456001",orderID:"D20181022123456001",payMethod:"智慧支付",monney:"400.00",outsideId:"F201810223546001",receiver:"02 刘娜"},{date:"2018-12-12 20:08:08",serNumber:"P20181022123456001",orderID:"D20181022123456001",payMethod:"智慧支付",monney:"400.00",outsideId:"F201810223546001",receiver:"02 刘娜"},{date:"2018-12-12 20:08:08",serNumber:"P20181022123456001",orderID:"D20181022123456001",payMethod:"智慧支付",monney:"400.00",outsideId:"F201810223546001",receiver:"02 刘娜"}]}},mounted:function(){},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)}}},b=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"page-main money-bill"},[s("div",{staticClass:"bill_header"},[s("time-filter",[s("div",{staticClass:"bill-header-formItem",attrs:{label:"收款人"}},[s("label",[t._v("收款人：")]),t._v(" "),s("el-select",{staticClass:"w100 bill-header-select",attrs:{placeholder:"请选择"},model:{value:t.receiptMan,callback:function(i){t.receiptMan=i},expression:"receiptMan"}},[s("el-option",{attrs:{label:"张三",value:"张三"}}),t._v(" "),s("el-option",{attrs:{label:"李四",value:"李四"}})],1)],1)])],1),t._v(" "),s("mql-main",[s("div",{staticClass:"bill-statistics"},[s("div",{staticClass:"bill-statistics-item"},[s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("\n                            收入\n                            "),s("el-tooltip",{staticClass:"bill-statistics-card-tips",attrs:{effect:"dark",content:"流入门店的资金累计",placement:"top-start"}},[s("i",{staticClass:"el-icon-question"})])],1),t._v(" "),s("div",{staticClass:"bill-statistics-card-allmonney"},[t._v("3000.00")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("\n                            智慧支付\n                            "),s("el-tooltip",{staticClass:"bill-statistics-card-tips",attrs:{effect:"dark",content:"顾客扫订单付款码支付",placement:"top-start"}},[s("i",{staticClass:"el-icon-question"})])],1),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("3000")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(50笔)")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("现金")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("500.00")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(10单)")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("银联刷卡")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("100.00")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(5单)")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("支付宝")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("100.00")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(5单)")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("微信")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("100.00")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(5单)")])])]),t._v(" "),s("div",{staticClass:"bill-statistics-item"},[s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("\n                            智慧耗卡\n                            "),s("el-tooltip",{staticClass:"bill-statistics-card-tips",attrs:{effect:"dark",content:"顾客扫订单付款码耗会员卡",placement:"top-start"}},[s("i",{staticClass:"el-icon-question"})])],1),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("800.00")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(10单)")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("团购")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("100.00")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(5单)")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("代金券")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("100.00")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(5单)")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("免单")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("200")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(1单)")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("\n                            积分\n                            "),s("el-tooltip",{staticClass:"bill-statistics-card-tips",attrs:{effect:"dark",content:"会员积分兑换数量",placement:"top"}},[s("i",{staticClass:"el-icon-question"})])],1),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("4000")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(5单)")])]),t._v(" "),s("div",{staticClass:"bill-statistics-card"},[s("div",{staticClass:"bill-statistics-card-title"},[t._v("其他")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-monney"},[t._v("100.00")]),t._v(" "),s("div",{staticClass:"bill-statistics-card-completenum"},[t._v("(5单)")])])]),t._v(" "),s("div",{staticClass:"bill-statistics-bottom"},[t._v("\n                    收入 = 智慧支付 + 现金 + 银联刷卡 + 支付宝 + 微信 + 团购\n                ")])]),t._v(" "),s("div",{staticClass:"bill-list"},[s("div",{staticClass:"bill-list-top"},[s("div",{staticClass:"bill-list-title sign"},[t._v("账单列表")]),t._v(" "),s("el-button",{staticClass:"bill-list-export",attrs:{plain:""}},[t._v("导出excel")])],1),t._v(" "),s("div",{staticClass:"bill-list-content"},[s("el-table",{staticStyle:{width:"100%","font-size":"13px"},attrs:{data:t.tableData,stripe:"","cell-style":{textAlign:"center"},"header-cell-style":{background:"#e4e4e4",color:"#333",textAlign:"center"}}},[s("el-table-column",{attrs:{prop:"date",label:"支付时间",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"serNumber",label:"支付流水号",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"orderID",label:"订单号",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"payMethod",label:"付款方式"}}),t._v(" "),s("el-table-column",{attrs:{prop:"monney",label:"实收金额"}}),t._v(" "),s("el-table-column",{attrs:{prop:"outsideId",label:"外部单号",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"receiver",label:"收款人"}})],1)],1),t._v(" "),s("div",{staticClass:"bill-list-pagination"},[s("el-pagination",{staticClass:"fr",attrs:{"current-page":t.currentPage4,"page-sizes":[15,20,30,40],"page-size":100,background:"",layout:"total, sizes, prev, pager, next",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])],1)};b._withStripped=!0;var p={render:b,staticRenderFns:[]},m=p;var _=!1;var u=s("VU/8")(v,m,!1,function(t){_||s("8u+9")},"data-v-5d7d6545",null);u.options.__file="src/views/home/money/moneyBill/index.vue";i.default=u.exports},"8u+9":function(t,i,s){var l=s("Pc4c");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);s("rjj0")("74f20562",l,!1,{})},Pc4c:function(t,i,s){(t.exports=s("FZ+f")(!1)).push([t.i,"\n.bill_header[data-v-5d7d6545] {\n  min-width: 1088px;\n  background: #f0f0f0;\n}\n.bill_header .bill-header-formItem[data-v-5d7d6545] {\n    height: 30px;\n    line-height: 30px;\n    margin-top: 5px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.bill_header .bill-header-formItem .bill-header-select[data-v-5d7d6545] {\n      margin-left: 25px;\n}\n.bill-statistics[data-v-5d7d6545] {\n  min-width: 1035px;\n}\n.bill-statistics .bill-statistics-item[data-v-5d7d6545] {\n    width: 100%;\n    height: 93px;\n    background: #f2f2f2;\n    margin-bottom: 4px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    justify-items: center;\n}\n.bill-statistics .bill-statistics-item .bill-statistics-card[data-v-5d7d6545] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: center;\n}\n.bill-statistics .bill-statistics-item .bill-statistics-card .bill-statistics-card-title[data-v-5d7d6545] {\n        color: #A1A1A1;\n        font-size: 14px;\n        margin-top: 15px;\n        position: relative;\n}\n.bill-statistics .bill-statistics-item .bill-statistics-card .bill-statistics-card-title .bill-statistics-card-tips[data-v-5d7d6545] {\n          position: absolute;\n          right: 22px;\n          top: -2px;\n          font-size: 18px;\n}\n.bill-statistics .bill-statistics-item .bill-statistics-card .bill-statistics-card-allmonney[data-v-5d7d6545] {\n        font-size: 28px;\n        color: #CC0099;\n        margin-top: 10px;\n}\n.bill-statistics .bill-statistics-item .bill-statistics-card .bill-statistics-card-monney[data-v-5d7d6545] {\n        font-size: 18px;\n        color: #3399FF;\n        margin-top: 10px;\n}\n.bill-statistics .bill-statistics-item .bill-statistics-card .bill-statistics-card-completenum[data-v-5d7d6545] {\n        font-size: 13px;\n        color: #515151;\n        margin-top: 5px;\n}\n.bill-statistics .bill-statistics-bottom[data-v-5d7d6545] {\n    font-size: 12px;\n    color: #999;\n}\n.bill-list[data-v-5d7d6545] {\n  min-width: 1035px;\n  margin-top: 20px;\n  padding-bottom: 200px;\n}\n.bill-list .bill-list-top[data-v-5d7d6545] {\n    position: relative;\n    border-bottom: 1px solid #c3c3c3;\n}\n.bill-list .bill-list-top .bill-list-title[data-v-5d7d6545] {\n      font-size: 16px;\n      font-weight: 400;\n      height: 30px;\n      line-height: 30px;\n      margin-left: 10px;\n}\n.bill-list .bill-list-top .sign[data-v-5d7d6545] {\n      position: relative;\n}\n.bill-list .bill-list-top .sign[data-v-5d7d6545]:after {\n        content: '';\n        position: absolute;\n        left: -10px;\n        top: 10%;\n        width: 5px;\n        height: 80%;\n        background: #ccc;\n}\n.bill-list .bill-list-top .bill-list-export[data-v-5d7d6545] {\n      position: absolute;\n      top: -10px;\n      right: 0;\n}\n.bill-list .bill-list-content[data-v-5d7d6545] {\n    margin-top: 30px;\n}\n.bill-list .bill-list-content th[data-v-5d7d6545] {\n      text-align: center;\n}\n.bill-list .bill-list-pagination[data-v-5d7d6545] {\n    margin-top: 30px;\n}\n",""])}});