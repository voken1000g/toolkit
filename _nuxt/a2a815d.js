(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{861:function(t,e,r){"use strict";r.r(e);var d=r(23),n={name:"web3",middleware:["web3"],computed:{fnEthereum:function(){return d.a}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"resp-wide pb-72"},[r("div",{staticClass:"max-w-2xl mx-auto py-16 sm:py-20 sm:px-6 lg:px-8 lg:max-w-7xl"},[r("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[t._m(0),t._v(" "),r("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[r("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.ether.productionMode,expression:"!$store.state.ether.productionMode"}],staticClass:"div-striped-list-card"},[r("dt",[t._v("\n              Production Mode\n            ")]),t._v(" "),r("dd",[t._v("\n              "+t._s(t.$store.state.ether.productionMode)+"\n            ")])]),t._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[t._v("\n              Chain ID (Name)\n            ")]),t._v(" "),r("dd",[t._v("\n              "+t._s(t.$store.state.ether.chainId)+" ("+t._s(t.fnEthereum.chainId2NetworkName(t.$store.state.ether.chainId))+")\n            ")])]),t._v(" "),t.$store.state.ether.blockNumber?r("div",{staticClass:"div-striped-list-card"},[r("dt",[t._v("\n              Block Height\n            ")]),t._v(" "),r("dd",[t._v("\n              "+t._s(t.$store.state.ether.blockNumberStr)+"\n            ")])]):t._e(),t._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[t._v("\n              ETH Balance\n            ")]),t._v(" "),r("dd",[r("fa",{staticClass:"text-indigo-600",attrs:{icon:["fab","ethereum"]}}),t._v("\n              "+t._s(t.$store.state.ether.balanceStr)+" ETH\n            ")],1)])])])])]),t._v(" "),t.$store.state.ether.productionMode&&t.$route.query.url?r("div",{staticClass:"mx-auto w-full max-w-lg"},[r("nuxt-link",{staticClass:"w-full btn btn-pink justify-center py-3",attrs:{to:t.$route.query.url}},[t._v("\n      Back to the Previous Page\n    ")])],1):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h3",[t._v("\n          ETH (Ethereum) Blockchain\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);