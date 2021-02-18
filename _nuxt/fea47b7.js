(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{481:function(t,e,l){"use strict";l.r(e);var r={name:"LayoutWProse"},d=l(7),component=Object(d.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("article",{staticClass:"prose lg:prose-lg xl:prose-xl max-w-none"},[this._t("default")],2)}),[],!1,null,"6a3d2caa",null);e.default=component.exports},549:function(t,e,l){"use strict";l.r(e);var r=l(164),d=l.n(r),n=l(163),o=l(112),c={name:"wallet-validator",layout:"wallet",components:{LayoutWProse:l(481).default,LayoutW:o.default,VueAvatar:n.a},head:function(){return{title:this.$t("nav.Wallet_Validator")}},data:function(){return{address:""}},computed:{isAddress:function(){return d.a.isAddress(this.address)}}},v=l(7),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("layout-w",{staticClass:"pb-36"},[l("layout-w-prose",{staticClass:"mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16"},[l("h1",[t._v("\n      "+t._s(t.$t("nav.Wallet_Validator"))+"\n    ")]),t._v(" "),l("p",[t._v("\n      "+t._s(t.$t("wallet.A_valid_VOKEN_wallet_address_is_"))+"\n    ")]),t._v(" "),l("ul",[l("li",[t._v("\n        "+t._s(t.$t("wallet.Starts_with_a_lowercase"))+" "),l("code",[t._v("v")])]),t._v(" "),l("li",[t._v("\n        "+t._s(t.$t("wallet._33_characters"))+"\n      ")]),t._v(" "),l("li",[t._v("\n        "+t._s(t.$t("wallet.Base32_encoded_"))+t._s(t.$t("wallet.by"))+"\n        "),l("a",{attrs:{target:"_blank",href:"https://voken.io/en/latest/npm/base32.html"}},[t._v("@voken/base32")])]),t._v(" "),l("li",[t._v("\n        "+t._s(t.$t("wallet.Looks_like_"))),l("code",[t._v("vXKJe8F9T7hJ8kr1Dddg9b83eufmU6h2k")])])])]),t._v(" "),l("div",{staticClass:"w-full md:max-w-2xl mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 mx-auto font-mono text-sm md:text-base",class:{success:t.address&&t.isAddress,error:t.address&&!t.isAddress}},[l("div",{staticClass:"w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg"},[l("vue-avatar",{directives:[{name:"show",rawName:"v-show",value:t.isAddress,expression:"isAddress"}],attrs:{value:t.address}}),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAddress,expression:"!isAddress"}],staticClass:"h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300",class:{"text-red-300":t.address&&!t.isAddress}},[l("fa",{directives:[{name:"show",rawName:"v-show",value:!t.address,expression:"!address"}],attrs:{icon:["fas","seedling"]}}),t._v(" "),l("fa",{directives:[{name:"show",rawName:"v-show",value:t.address&&!t.isAddress,expression:"address && !isAddress"}],attrs:{icon:["fas","times"]}})],1)],1),t._v(" "),l("label",{staticClass:"block mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-14 font-medium text-gray-700 text-left",attrs:{for:"address-validate"}},[t._v("\n      "+t._s(t.$t("wallet.VOKEN_wallet_address"))+"\n    ")]),t._v(" "),l("div",{staticClass:"relative mt-1"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"input-indigo w-full py-3 px-6 font-mono text-sm md:text-base",attrs:{type:"text",id:"address-validate",placeholder:t.$t("wallet.Input_here_to_auto_verify_")},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),l("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[l("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),l("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),l("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutWProse:l(481).default,LayoutW:l(112).default})}}]);