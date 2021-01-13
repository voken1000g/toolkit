(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{478:function(e,t,r){"use strict";r.r(t);var l={name:"LayoutWProse"},o=r(7),component=Object(o.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("article",{staticClass:"prose lg:prose-lg xl:prose-xl max-w-none"},[this._t("default")],2)}),[],!1,null,"6a3d2caa",null);t.default=component.exports},479:function(e,t,r){(function(t){const l=r(163);class o extends Error{constructor(e){super(e),this.name="InvalidStartError",this.code="INVALID_START"}}class n extends Error{constructor(e){super(e),this.name="InvalidLengthError",this.code="INVALID_LENGTH"}}e.exports={fromVPriv:function(input){if(!input instanceof String)throw TypeError("Except: String");if("vpriv"!==input.slice(0,5))throw new o("A VOKEN Private Key should start with `vpriv`");if(52!==(input=input.slice(5)).length)throw new n("The length of a VOKEN Private Key should be `57`");let e=t.from(l.decode(input));for(;e.length<32;)e=t.concat([t.from("00","hex"),e]);return e},toVPriv:function(input){if(32!==input.length)throw new n("The length of a Private Key should be `32`");return"vpriv"+l.encode(input)},InvalidStartError:o,InvalidLengthError:n}}).call(this,r(9).Buffer)},491:function(e,t,r){"use strict";(function(e){r(34),r(35),r(18);var l=r(164),o=r.n(l),n=r(479),c=r.n(n),v=r(113),d=r.n(v),m=r(162),h=r.n(m),y=r(112),f=r(478);t.a={name:"wallet-private-key",layout:"wallet",components:{LayoutWProse:f.default,LayoutW:y.default},head:function(){return{title:this.$t("nav.Wallet_Private_Key")}},data:function(){return{vpriv:"",vprivError:"",bufPrivateKey:e.from(""),hexPrivateKey:"",hexPrivateKeyError:"",vpubError:"",hexPublicKeyCompressedError:"",hexPublicKeyUncompressedError:""}},watch:{vpriv:function(){if(this.vpriv)try{this.bufPrivateKey=c.a.fromVPriv(this.vpriv),this.hexPrivateKey=this.bufPrivateKey.toString("hex"),this.vprivError=""}catch(e){this.vprivError=e.message,this.hexPrivateKey=""}else this.vprivError="",this.bufPrivateKey=e.from("")},hexPrivateKey:function(){if(this.hexPrivateKey)try{this.bufPrivateKey=e.from(this.hexPrivateKey,"hex"),this.vpriv=c.a.toVPriv(this.bufPrivateKey),this.hexPrivateKeyError=""}catch(e){this.hexPrivateKeyError=e.message,this.vpriv=""}else this.hexPrivateKeyError="",this.bufPrivateKey=e.from("")}},computed:{address:function(){if(33===this.bufPublicKeyCompressed.length)try{return this.hexPublicKeyCompressedError="",o.a.fromPublicKey(this.bufPublicKeyCompressed)}catch(e){this.hexPublicKeyCompressedError=e.message}return""},vprivClass:function(){return this.vpriv?this.vprivError||this.hexPublicKeyCompressedError||this.hexPublicKeyUncompressedError||this.vpubError?"error":"success":null},vprivLabel:function(){return"error"===this.vprivClass?this.$t("wallet.VOKEN_Private_Key__")+" "+this.vprivError:this.$t("wallet.VOKEN_Private_Key__")},privateKeyClass:function(){return this.hexPrivateKey?this.hexPrivateKeyError||this.hexPublicKeyCompressedError||this.hexPublicKeyUncompressedError||this.vpubError?"error":"success":null},privateKeyLabel:function(){return"error"===this.privateKeyClass?this.$t("wallet.Private_Key_in_HEX")+" "+this.hexPrivateKeyError:this.$t("wallet.Private_Key_in_HEX")},bufPublicKeyCompressed:function(){if(32===this.bufPrivateKey.length)try{return d.a.fromPrivateKey(this.bufPrivateKey)}catch(e){console.error("bufPublicKeyCompressed:",e)}return e.from("")},hexPublicKeyCompressed:function(){return 33===this.bufPublicKeyCompressed.length?this.bufPublicKeyCompressed.toString("hex"):""},hexPublicKeyCompressedClass:function(){return this.hexPublicKeyCompressed&&this.hexPublicKeyCompressedError?"error":null},hexPublicKeyCompressedLabel:function(){return"error"===this.hexPublicKeyCompressedClass?this.$t("wallet.Compressed_Public_Key_in_HEX")+" "+this.hexPublicKeyCompressedError:this.$t("wallet.Compressed_Public_Key_in_HEX")},vpub:function(){if(33===this.bufPublicKeyCompressed.length)try{return this.hexPublicKeyCompressedError="",d.a.toVPub(this.bufPublicKeyCompressed)}catch(e){this.hexPublicKeyCompressedError=e.message}return""},vpubClass:function(){return this.vpub&&this.vpubError?"error":null},vpubLabel:function(){return"error"===this.vpubClass?this.$t("wallet.VOKEN_Public_Key__")+" "+this.vpubError:this.$t("wallet.VOKEN_Public_Key__")},bufPublicKeyUncompressed:function(){if(33===this.bufPublicKeyCompressed.length)try{return this.hexPublicKeyCompressedError="",d.a.decompress(this.bufPublicKeyCompressed)}catch(e){console.error("bufPublicKeyUncompressed:",e),this.hexPublicKeyCompressedError=e.message}return e.from("")},hexPublicKeyUncompressed:function(){return 65===this.bufPublicKeyUncompressed.length?this.bufPublicKeyUncompressed.toString("hex"):""},hexPublicKeyUncompressedClass:function(){return this.hexPublicKeyUncompressed&&this.hexPublicKeyUncompressedError?"error":null},hexPublicKeyUncompressedLabel:function(){return"error"===this.hexPublicKeyUncompressedClass?this.$t("wallet.Uncompressed_Public_Key_in_HEX")+" "+this.hexPublicKeyUncompressedError:this.$t("wallet.Uncompressed_Public_Key_in_HEX")},isAddress:function(){return o.a.isAddress(this.address)},addressAvatarImageSrc:function(){return this.address?h.a.svgDataUriFromSeed(this.address):null}}}}).call(this,r(9).Buffer)},550:function(e,t,r){"use strict";r.r(t);var l=r(491).a,o=r(7),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("layout-w",{staticClass:"pb-36"},[r("layout-w-prose",{staticClass:"mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16"},[r("h1",[e._v("\n      "+e._s(e.$t("nav.Wallet_Private_Key"))+"\n    ")]),e._v(" "),r("p",{staticClass:"text-red-600"},[r("span",{staticClass:"text-5xl"},[r("fa",{attrs:{icon:["fas","lock"]}})],1),e._v(" "),r("br"),e._v("\n      "+e._s(e.$t("wallet.You_should_always_keep_your_Private_Key_safe_"))),r("b",[e._v(e._s(e.$t("wallet.Never_disclose_it_to_anyone")))])])]),e._v(" "),r("div",{staticClass:"w-full mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 mx-auto font-mono text-sm md:text-base"},[r("div",{staticClass:"space-y-10 lg:space-y-0 lg:flex lg:items-end lg:justify-center lg:space-x-8"},[r("div",{staticClass:"w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto lg:mx-0 bg-white rounded-md shadow-md lg:shadow-lg"},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.isAddress,expression:"isAddress"}],attrs:{src:e.addressAvatarImageSrc,alt:"address avatar"}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isAddress,expression:"!isAddress"}],staticClass:"h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300"},[r("fa",{directives:[{name:"show",rawName:"v-show",value:!e.isAddress,expression:"!isAddress"}],attrs:{icon:["fas","seedling"]}})],1)]),e._v(" "),r("div",{staticClass:"w-full lg:max-w-2xl"},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"private-key-converter-address"}},[e._v("\n          "+e._s(e.$t("wallet.VOKEN_Address"))+"\n        ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"input-indigo w-full py-3 px-4 bg-gray-100 font-mono text-sm md:text-base text-gray-500",attrs:{type:"text",id:"private-key-converter-address",placeholder:e.$t("wallet.Auto_Convert_"),readonly:""},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])])]),e._v(" "),r("div",{staticClass:"mt-12 md:mt-14 lg:mt-16",class:e.vprivClass},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"private-key-converter-vpriv"}},[e._v("\n        "+e._s(e.vprivLabel)+"\n      ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.vpriv,expression:"vpriv"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base",attrs:{type:"text",id:"private-key-converter-vpriv",placeholder:"vpriv..."},domProps:{value:e.vpriv},on:{input:function(t){t.target.composing||(e.vpriv=t.target.value)}}}),e._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),e._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}})],1)])]),e._v(" "),r("div",{staticClass:"mt-4 md:mt-6 lg:mt-8",class:e.privateKeyClass},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"private-key-converter-privateKey"}},[e._v("\n        "+e._s(e.privateKeyLabel)+"\n      ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.hexPrivateKey,expression:"hexPrivateKey"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base",attrs:{type:"text",id:"private-key-converter-privateKey",placeholder:"0..."},domProps:{value:e.hexPrivateKey},on:{input:function(t){t.target.composing||(e.hexPrivateKey=t.target.value)}}}),e._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),e._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}})],1)])]),e._v(" "),r("div",{staticClass:"my-12 md:my-14 lg:my-16 border-t border-gray-300"}),e._v(" "),r("layout-w-prose",[r("p",{staticClass:"text-green-500"},[r("fa",{attrs:{icon:["fas","shield-alt"]}}),e._v("\n        "+e._s(e.$t("wallet.Sending_a_Public_Key_is_safe"))+"\n      ")],1)]),e._v(" "),r("div",{staticClass:"mt-4 md:mt-6 lg:mt-8",class:e.vpubClass},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"private-key-converter-vpub"}},[e._v("\n        "+e._s(e.vpubLabel)+"\n      ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.vpub,expression:"vpub"}],staticClass:"input-indigo w-full py-3 px-4 bg-gray-100 font-mono text-sm md:text-base text-gray-500",attrs:{type:"text",id:"private-key-converter-vpub",placeholder:e.$t("wallet.Auto_Convert_"),readonly:""},domProps:{value:e.vpub},on:{input:function(t){t.target.composing||(e.vpub=t.target.value)}}}),e._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}})],1)])]),e._v(" "),r("div",{staticClass:"mt-4 md:mt-6 lg:mt-8",class:e.hexPublicKeyCompressedClass},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"private-key-converter-public-key-compressed"}},[e._v("\n        "+e._s(e.hexPublicKeyCompressedLabel)+"\n      ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.hexPublicKeyCompressed,expression:"hexPublicKeyCompressed"}],staticClass:"input-indigo w-full py-3 px-4 bg-gray-100 font-mono text-sm md:text-base text-gray-500",attrs:{type:"text",id:"private-key-converter-public-key-compressed",placeholder:e.$t("wallet.Auto_Convert_"),readonly:""},domProps:{value:e.hexPublicKeyCompressed},on:{input:function(t){t.target.composing||(e.hexPublicKeyCompressed=t.target.value)}}}),e._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}})],1)])]),e._v(" "),r("div",{staticClass:"mt-4 md:mt-6 lg:mt-8",class:e.hexPublicKeyUncompressedClass},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"private-key-converter-public-key-decompressed"}},[e._v("\n        "+e._s(e.hexPublicKeyUncompressedLabel)+"\n      ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.hexPublicKeyUncompressed,expression:"hexPublicKeyUncompressed"}],staticClass:"input-indigo w-full py-3 px-4 bg-gray-100 font-mono text-sm md:text-base text-gray-500",attrs:{type:"text",id:"private-key-converter-public-key-decompressed",placeholder:e.$t("wallet.Auto_Convert_"),readonly:""},domProps:{value:e.hexPublicKeyUncompressed},on:{input:function(t){t.target.composing||(e.hexPublicKeyUncompressed=t.target.value)}}}),e._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}})],1)])])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LayoutWProse:r(478).default,LayoutW:r(112).default})}}]);