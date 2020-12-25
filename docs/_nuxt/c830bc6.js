(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(e,t,o){"use strict";(function(e){var r=o(267),n=o.n(r),c=o(264);t.a={name:"base32",components:{LayoutW:c.default},layout:"middleCenter",data:function(){return{decoded:"",encoded:"",exception:null,decodeError:!1,encodeError:!1}},watch:{decoded:function(){if(this.encodeError=!1,this.decodeError=!1,this.exception=null,this.decoded)try{this.encoded=n.a.encode(e.from(this.decoded))}catch(e){this.encodeError=!0,this.exception=e.message}else this.encoded=""},encoded:function(){if(this.encodeError=!1,this.decodeError=!1,this.exception=null,this.encoded)try{this.decoded=n.a.decode(this.encoded)}catch(e){this.decodeError=!0,this.exception=e.message}else this.decoded=""}}}}).call(this,o(162).Buffer)},262:function(e,t,o){var content=o(360);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(63).default)("74ac6d48",content,!0,{sourceMap:!1})},264:function(e,t,o){"use strict";o.r(t);var r={name:"LayoutW"},n=o(19),component=Object(n.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"},[this._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},270:function(e,t){},272:function(e,t){},282:function(e,t){},284:function(e,t){},309:function(e,t){},310:function(e,t){},315:function(e,t){},317:function(e,t){},324:function(e,t){},343:function(e,t){},359:function(e,t,o){"use strict";o(262)},360:function(e,t,o){(t=o(62)(!1)).push([e.i,".error[data-v-1711286e]{--text-opacity:1;color:#c81e1e;color:rgba(200,30,30,var(--text-opacity))}.error label[data-v-1711286e]{font-weight:700}.error textarea[data-v-1711286e]{--bg-opacity:1;background-color:#fdf2f2;background-color:rgba(253,242,242,var(--bg-opacity));--border-opacity:1;border-color:#e02424;border-color:rgba(224,36,36,var(--border-opacity));--text-opacity:1;color:#e02424;color:rgba(224,36,36,var(--text-opacity))}.error textarea[data-v-1711286e]:focus{--border-opacity:1;border-color:#f05252;border-color:rgba(240,82,82,var(--border-opacity));box-shadow:0 0 0 3px rgba(248,180,180,.45)}a[data-v-1711286e]{color:#5145cd;color:rgba(81,69,205,var(--text-opacity))}a[data-v-1711286e],a[data-v-1711286e]:hover{--text-opacity:1}a[data-v-1711286e]:hover{color:#6875f5;color:rgba(104,117,245,var(--text-opacity))}",""]),e.exports=t},364:function(e,t,o){"use strict";o.r(t);var r=o(187).a,n=(o(359),o(19)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("LayoutW",{staticClass:"pb-16"},[o("h1",{staticClass:"my-8 lg:my-12 2xl:my-16 text-2xl lg:text-3xl text-indigo-600 text-center"},[e._v("\n    @voken/base32\n  ")]),e._v(" "),o("div",{staticClass:"flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0"},[o("div",{staticClass:"flex-1",class:{error:e.encodeError}},[o("label",{attrs:{for:"decoded"}},[e._v("\n        Base32 Decoded (utf-8)\n      ")]),e._v(" "),o("div",{staticClass:"relative"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.decoded,expression:"decoded"}],staticClass:"mt-2 w-full form-textarea text-sm md:text-base lg:text-lg",attrs:{name:"decoded",id:"decoded",rows:"20",placeholder:"Sample"},domProps:{value:e.decoded},on:{input:function(t){t.target.composing||(e.decoded=t.target.value)}}}),e._v(" "),o("div",{staticClass:"absolute bottom-4 w-full font-mono text-gray-500 text-center"},[e._v("\n          Input here to auto encode...\n        ")])])]),e._v(" "),o("div",{staticClass:"flex-1 relative",class:{error:e.decodeError}},[o("label",{attrs:{for:"encoded"}},[e._v("\n        Base32 Encoded (checksum)\n      ")]),e._v(" "),o("div",{staticClass:"relative"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.encoded,expression:"encoded"}],staticClass:"mt-2 w-full form-textarea text-sm md:text-base lg:text-lg",attrs:{name:"encoded",id:"encoded",rows:"20",placeholder:"AdGPtv3Ccm"},domProps:{value:e.encoded},on:{input:function(t){t.target.composing||(e.encoded=t.target.value)}}}),e._v(" "),o("div",{staticClass:"absolute bottom-4 w-full font-mono text-gray-500 text-center"},[e._v("\n          Input here to auto decode...\n        ")])])])]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.exception,expression:"exception"}],staticClass:"my-2 md:my-3 lg:my-4 lg:text-lg xl:text-xl text-red-700"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.encodeError,expression:"encodeError"}]},[e._v("\n      Encoded input:\n    ")]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.decodeError,expression:"decodeError"}]},[e._v("\n      Decoded input:\n    ")]),e._v(" "),o("div",{staticClass:"mt-2 px-2 md:px-3 lg:px-4"},[e._v("\n      "+e._s(e.exception)+"\n    ")])]),e._v(" "),o("div",{staticClass:"mt-8 lg:mt-12 pt-4 lg:pt-6 border-t border-gray-300 font-mono text-gray-600 text-center"},[o("div",[o("span",[e._v("\n        Documentation:\n      ")]),e._v(" "),o("a",{attrs:{target:"_blank",href:"https://voken.io/en/npm/base32.html"}},[e._v("\n        https://voken.io/en/npm/base32.html\n      ")])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("span",[e._v("\n        npm:\n      ")]),e._v(" "),o("a",{attrs:{target:"_blank",href:"https://www.npmjs.com/package/@voken/base32"}},[e._v("\n        https://www.npmjs.com/package/@voken/base32\n      ")])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("span",[e._v("\n        GitHub:\n      ")]),e._v(" "),o("a",{attrs:{target:"_blank",href:"https://github.com/voken1000g/npm-base32"}},[e._v("\n        https://github.com/voken1000g/npm-base32\n      ")])])])])}),[],!1,null,"1711286e",null);t.default=component.exports;installComponents(component,{LayoutW:o(264).default})}}]);