(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{499:function(t,e,l){"use strict";l.r(e);var n=l(0),r=(l(16),{name:"CompWallet",components:{VueAvatar:l(174).a},props:["wallet"],methods:{copyPrivateKey:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:e.$refs["private-key-"+t].select(),document.execCommand("copy")?e.$toast.info(e.$t("wallet.Private_Key_copied")):e.$toast.info(e.$t("wallet.Copy_failed"));case 2:case"end":return l.stop()}}),l)})))()},copyPublicKey:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:e.$refs["public-key-"+t].select(),document.execCommand("copy")?e.$toast.info(e.$t("wallet.Public_Key_copied")):e.$toast.info(e.$t("wallet.Copy_failed"));case 2:case"end":return l.stop()}}),l)})))()},copyAddress:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:e.$refs["address-"+t].select(),document.execCommand("copy")?e.$toast.info(e.$t("wallet.Wallet_Address_copied")):e.$toast.info(e.$t("wallet.Copy_failed"));case 2:case"end":return l.stop()}}),l)})))()}}}),o=l(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.wallet?l("div",{staticClass:"flex flex-col space-y-6 lg:flex-row lg:items-start lg:space-x-10 lg:space-y-0 mt-4 lg:mt-6 2xl:mt-8 py-6 xl:py-8 px-4 lg:px-8 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-md"},[l("div",{staticClass:"xl:w-1/4 lg:pt-4"},[l("div",{staticClass:"w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md border border-gray-300 shadow-md lg:shadow-lg"},[l("vue-avatar",{attrs:{value:t.wallet.address}})],1),t._v(" "),l("h3",{staticClass:"mt-2 lg:mt-3 xl:mt-4 text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 text-center"},[t._v("\n      "+t._s(t.$t("wallet.Wallet"))+" #"+t._s(t.wallet.index)+"\n    ")]),t._v(" "),l("div",{staticClass:"xl:hidden font-mono text-xs sm:text-sm text-gray-500 text-center"},[t._v("\n      "+t._s(t.wallet.path)+"\n    ")])]),t._v(" "),l("div",{staticClass:"w-full xl:flex"},[l("div",{staticClass:"xl:w-2/3 xl:max-w-2xl flex-row space-y-4 lg:space-y-6"},[l("div",{staticClass:"mx-auto lg:mx-0 max-w-2xl"},[l("label",{attrs:{for:"private_key"+t.wallet.index}},[t._v("\n          "+t._s(t.$t("wallet.Private_Key"))+"\n        ")]),t._v(" "),l("div",{staticClass:"mt-1 relative rounded-md shadow-md"},[l("input",{ref:"private-key-"+t.wallet.index,staticClass:"input-private",attrs:{type:"text",name:"private-key-"+t.wallet.index,id:"private_key_"+t.wallet.index,readonly:""},domProps:{value:t.wallet.vpriv},on:{click:function(e){return t.copyPrivateKey(t.wallet.index)}}}),t._v(" "),l("div",{staticClass:"absolute inset-y-0 right-0 pr-6 flex items-center"},[l("button",{staticClass:"btn-copy",attrs:{type:"button"},on:{click:function(e){return t.copyPrivateKey(t.wallet.index)}}},[l("fa",{attrs:{icon:["fas","copy"]}})],1)])])]),t._v(" "),l("div",{staticClass:"mx-auto lg:mx-0 max-w-2xl"},[l("label",{attrs:{for:"public_key"+t.wallet.index}},[t._v("\n          "+t._s(t.$t("wallet.Public_Key"))+"\n        ")]),t._v(" "),l("div",{staticClass:"mt-1 relative rounded-md shadow-md"},[l("input",{ref:"public-key-"+t.wallet.index,staticClass:"input-public",attrs:{type:"text",name:"public-key-"+t.wallet.index,id:"public_key"+t.wallet.index,readonly:""},domProps:{value:t.wallet.vpub},on:{click:function(e){return t.copyPublicKey(t.wallet.index)}}}),t._v(" "),l("div",{staticClass:"absolute inset-y-0 right-0 pr-6 flex items-center"},[l("button",{staticClass:"btn-copy",attrs:{type:"button"},on:{click:function(e){return t.copyPublicKey(t.wallet.index)}}},[l("fa",{attrs:{icon:["fas","copy"]}})],1)])])]),t._v(" "),l("div",{staticClass:"mx-auto lg:mx-0 max-w-2xl"},[l("label",{attrs:{for:"address_"+t.wallet.index}},[t._v("\n          "+t._s(t.$t("wallet.Address"))+"\n        ")]),t._v(" "),l("div",{staticClass:"mt-1 relative rounded-md shadow-md"},[l("input",{ref:"address-"+t.wallet.index,staticClass:"input-public",attrs:{type:"text",name:"address-"+t.wallet.index,id:"address_"+t.wallet.index,readonly:""},domProps:{value:t.wallet.address},on:{click:function(e){return t.copyAddress(t.wallet.index)}}}),t._v(" "),l("div",{staticClass:"absolute inset-y-0 right-0 pr-6 flex items-center"},[l("button",{staticClass:"btn-copy",attrs:{type:"button"},on:{click:function(e){return t.copyAddress(t.wallet.index)}}},[l("fa",{attrs:{icon:["fas","copy"]}})],1)])])])]),t._v(" "),l("div",{staticClass:"hidden xl:block flex-grow"},[l("div",{staticClass:"h-full flex items-center justify-center font-mono"},[l("div",[l("div",{staticClass:"text-6xl text-indigo-400"},[t._v("\n            #"),l("span",{staticClass:"text-7xl"},[t._v(t._s(t.wallet.index))])]),t._v(" "),l("div",{staticClass:"text-gray-500 text-center"},[t._v("\n            "+t._s(t.wallet.path)+"\n          ")])])])])])]):t._e()}),[],!1,null,"5990ca2f",null);e.default=component.exports}}]);