(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{478:function(t,e,n){"use strict";n.r(e);var o={name:"LayoutWProse"},l=n(6),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("article",{staticClass:"prose lg:prose-lg xl:prose-xl max-w-none"},[this._t("default")],2)}),[],!1,null,"6a3d2caa",null);e.default=component.exports},480:function(t,e,n){"use strict";n.r(e);var o={name:"LayoutFooterSimple"},l=n(6),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mt-16 lg:mt-18 xl:mt-20 2xl:mt-28 pt-6 md:pt-8 lg:pt-10 xl:pt-12 border-t border-gray-300"},[this._t("default")],2)}),[],!1,null,"7bbebab7",null);e.default=component.exports},544:function(t,e,n){"use strict";n.r(e);var o=n(163),l=n.n(o),r=n(112),m=n(480),v={name:"avatar",layout:"indigoParticles",components:{LayoutWProse:n(478).default,LayoutFooterSimple:m.default,LayoutW:r.default},head:function(){return{title:this.$t("nav.Avatar")}},data:function(){return{avatar:l.a,something:""}}},c=n(6),component=Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-w",{staticClass:"pb-12"},[n("layout-w-prose",{staticClass:"mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16"},[n("h1",[t._v("\n      "+t._s(t.$t("nav.Avatar"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("nav.Avatar_"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"w-full md:max-w-2xl mt-10 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 mx-auto font-mono text-sm md:text-base"},[n("div",{staticClass:"w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg"},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.something,expression:"something"}],attrs:{src:t.avatar.svgDataUriFromSeed(t.something),alt:"something avatar"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.something,expression:"!something"}],staticClass:"h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300"},[n("fa",{attrs:{icon:["far","smile-wink"]}})],1)]),t._v(" "),n("label",{staticClass:"block mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-14 font-medium text-gray-700 text-left",attrs:{for:"something"}},[t._v("\n      "+t._s(t.$t("avatar.Input_something"))+"\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.something,expression:"something"}],staticClass:"input-indigo w-full mt-1 py-3 px-6 font-mono text-sm md:text-base",attrs:{type:"text",name:"something",id:"something",placeholder:t.$t("avatar.Input_something_to_auto_generate_")},domProps:{value:t.something},on:{input:function(e){e.target.composing||(t.something=e.target.value)}}})]),t._v(" "),n("layout-footer-simple",{staticClass:"font-mono text-gray-600 text-center"},[n("div",[n("span",[t._v("\n        "+t._s(t.$t("avatar.Documentation.text"))+"\n      ")]),t._v(" "),n("a",{staticClass:"a-indigo",attrs:{target:"_blank",href:t.$t("avatar.Documentation.href")}},[t._v("\n        "+t._s(t.$t("avatar.Documentation.href"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"mt-2"},[n("span",[t._v("\n        npm:\n      ")]),t._v(" "),n("a",{staticClass:"a-indigo",attrs:{target:"_blank",href:"https://www.npmjs.com/package/@voken/avatar"}},[t._v("\n        https://www.npmjs.com/package/@voken/avatar\n      ")])]),t._v(" "),n("div",{staticClass:"mt-2"},[n("span",[t._v("\n        GitHub:\n      ")]),t._v(" "),n("a",{staticClass:"a-indigo",attrs:{target:"_blank",href:"https://github.com/voken1000g/npm-avatar"}},[t._v("\n        https://github.com/voken1000g/npm-avatar\n      ")])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutWProse:n(478).default,LayoutFooterSimple:n(480).default,LayoutW:n(112).default})}}]);