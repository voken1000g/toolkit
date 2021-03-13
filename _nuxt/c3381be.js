(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{801:function(e,t,l){"use strict";l.r(t);var r=l(220),d=l.n(r),n={name:"wallet-validator",layout:"wallet",components:{VueAvatar:l(219).a},head:function(){return{title:this.$t("nav.Wallet_Validator")}},data:function(){return{address:""}},computed:{isAddress:function(){return d.a.isAddress(this.address)}}},o=l(13),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"resp-wide pb-36"},[l("article",{staticClass:"resp-mt prose lg:prose-lg xl:prose-xl max-w-none"},[l("h1",[e._v("\n      "+e._s(e.$t("nav.Wallet_Validator"))+"\n    ")]),e._v(" "),l("p",[e._v("\n      "+e._s(e.$t("wallet.A_valid_VOKEN_wallet_address_is_"))+"\n    ")]),e._v(" "),l("ul",[l("li",[e._v("\n        "+e._s(e.$t("wallet.Starts_with_a_lowercase"))+" "),l("code",[e._v("v")])]),e._v(" "),l("li",[e._v("\n        "+e._s(e.$t("wallet._33_characters"))+"\n      ")]),e._v(" "),l("li",[e._v("\n        "+e._s(e.$t("wallet.Base32_encoded_"))+e._s(e.$t("wallet.by"))+"\n        "),l("a",{attrs:{target:"_blank",href:"https://voken.io/en/latest/npm/base32.html"}},[e._v("@voken/base32")])]),e._v(" "),l("li",[e._v("\n        "+e._s(e.$t("wallet.Looks_like_"))),l("code",[e._v("vXKJe8F9T7hJ8kr1Dddg9b83eufmU6h2k")])])])]),e._v(" "),l("div",{staticClass:"w-full md:max-w-2xl mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 mx-auto font-mono text-sm md:text-base",class:{success:e.address&&e.isAddress,error:e.address&&!e.isAddress}},[l("div",{staticClass:"w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg"},[l("vue-avatar",{directives:[{name:"show",rawName:"v-show",value:e.isAddress,expression:"isAddress"}],attrs:{value:e.address}}),e._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:!e.isAddress,expression:"!isAddress"}],staticClass:"h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300",class:{"text-red-300":e.address&&!e.isAddress}},[l("fa",{directives:[{name:"show",rawName:"v-show",value:!e.address,expression:"!address"}],attrs:{icon:["fas","seedling"]}}),e._v(" "),l("fa",{directives:[{name:"show",rawName:"v-show",value:e.address&&!e.isAddress,expression:"address && !isAddress"}],attrs:{icon:["fas","times"]}})],1)],1),e._v(" "),l("label",{staticClass:"block mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-14 font-medium text-gray-700 text-left",attrs:{for:"address-validate"}},[e._v("\n      "+e._s(e.$t("wallet.VOKEN_wallet_address"))+"\n    ")]),e._v(" "),l("div",{staticClass:"relative mt-1"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"input-indigo w-full py-3 px-6 font-mono text-sm md:text-base",attrs:{type:"text",id:"address-validate",placeholder:e.$t("wallet.Input_here_to_auto_verify_")},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),e._v(" "),l("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[l("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),e._v(" "),l("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),e._v(" "),l("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);