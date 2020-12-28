(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{215:function(e,t,o){const n=o(208),r=o(202).Buffer;e.exports=function(){const e="0123456789abcdefghjkmnpqrstuvwxy",t=function(input){const e=o(input),t=e.split(""),n=l(e);let output="";return t.forEach((function(e,i){n[i%32]>127?output+=e.toUpperCase():output+=e})),output},o=function(input){if((Array.isArray(input)||input instanceof Uint8Array)&&(input=r.from(input)),!r.isBuffer(input))throw new TypeError("Expect `input` is type of Buffer | Uint8Array | Array, but got "+typeof input);let t=0,o=0,output="";for(let i=0;i<input.byteLength;i++)for(o=o<<8|input[i],t+=8;t>=5;)output+=e[o>>>t-5&31],t-=5;return t>0&&(output+=e[o<<5-t&31]),output},c=function(input){input=input.replace(/=+$/,"").toLowerCase();let output=new Uint8Array(5*input.length/8|0),e=0,t=0,o=0;for(let i=0;i<input.length;i++)t=t<<5|d(input[i]),e+=5,e>=8&&(output[o++]=t>>>e-8&255,e-=8);return r.from(output)},d=function(t){let o=e.indexOf(t);if(-1===o)throw new f("Invalid character found: "+t);return o},l=function(e){return n.createHash("sha256").update(e).digest()},f=function(e){this.message=e};f.prototype=new Error,f.prototype.name="InvalidCharacterError";const m=function(e){this.message=e};return m.prototype=new Error,m.prototype.name="InvalidChecksum",{encode:t,decode:function(input){const e=c(input),o=t(e);if(input!==o)throw new m("Invalid checksum with: "+o);return e},isChecksum:function(input){const e=c(input);return input===t(e)},encodeWithoutChecksum:o,decodeWithoutChecksum:c,InvalidCharacterError:f,InvalidChecksum:m}}()},226:function(e,t,o){"use strict";o.r(t);var n={name:"LayoutFooterSimple"},r=o(9),component=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mt-16 lg:mt-18 xl:mt-20 2xl:mt-28 pt-6 md:pt-8 lg:pt-10 xl:pt-12 border-t border-gray-300"},[this._t("default")],2)}),[],!1,null,"7bbebab7",null);t.default=component.exports},228:function(e,t){},229:function(e,t){},231:function(e,t){},232:function(e,t){},236:function(e,t){},237:function(e,t){},238:function(e,t){},239:function(e,t){},240:function(e,t){},243:function(e,t){},351:function(e,t,o){var content=o(444);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(42).default)("280d3adc",content,!0,{sourceMap:!1})},443:function(e,t,o){"use strict";o(351)},444:function(e,t,o){(t=o(41)(!1)).push([e.i,"a[data-v-68c4d4ae]{color:#5145cd;color:rgba(81,69,205,var(--text-opacity))}a[data-v-68c4d4ae],a[data-v-68c4d4ae]:hover{--text-opacity:1}a[data-v-68c4d4ae]:hover{color:#6875f5;color:rgba(104,117,245,var(--text-opacity))}",""]),e.exports=t},473:function(e,t,o){"use strict";o.r(t);var n=o(202),r=o(215),c=o.n(r),d=o(76),l={name:"base32",components:{LayoutFooterSimple:o(226).default,LayoutW:d.default},layout:"centerIndigo",data:function(){return{Buffer:n.Buffer,Base32:c.a,decoded:"",encoded:"",exception:null,decodeError:!1,encodeError:!1}},watch:{decoded:function(){if(this.encodeError=!1,this.decodeError=!1,this.exception=null,this.decoded)try{this.encoded=c.a.encode(n.Buffer.from(this.decoded))}catch(e){this.encodeError=!0,this.exception=e.message}else this.encoded=""},encoded:function(){if(this.encodeError=!1,this.decodeError=!1,this.exception=null,this.encoded)try{this.decoded=c.a.decode(this.encoded)}catch(e){this.decodeError=!0,this.exception=e.message}else this.decoded=""}}},f=(o(443),o(9)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("layout-w",{staticClass:"pb-36"},[o("h1",{staticClass:"my-8 lg:my-12 2xl:my-16 text-2xl lg:text-3xl text-indigo-600 text-center"},[e._v("\n    npm: @voken/base32\n  ")]),e._v(" "),o("div",{staticClass:"flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0"},[o("div",{staticClass:"flex-1",class:{error:e.encodeError}},[o("label",{attrs:{for:"decoded"}},[e._v("\n        "+e._s(e.$t("base32.Input_here_to_auto_encode_"))+"\n      ")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.decoded,expression:"decoded"}],staticClass:"mt-2 w-full form-textarea font-mono text-sm md:text-base lg:text-lg",attrs:{name:"decoded",id:"decoded",rows:"20",placeholder:e.$t("base32.Sample")},domProps:{value:e.decoded},on:{input:function(t){t.target.composing||(e.decoded=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"flex-1",class:{error:e.decodeError}},[o("label",{attrs:{for:"encoded"}},[e._v("\n        "+e._s(e.$t("base32.Input_here_to_auto_decode_"))+"\n      ")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.encoded,expression:"encoded"}],staticClass:"mt-2 w-full form-textarea font-mono text-sm md:text-base lg:text-lg",attrs:{name:"encoded",id:"encoded",rows:"20",placeholder:e.Base32.encode(e.Buffer.from(e.$t("base32.Sample")))},domProps:{value:e.encoded},on:{input:function(t){t.target.composing||(e.encoded=t.target.value)}}})])]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.exception,expression:"exception"}],staticClass:"my-2 md:my-3 lg:my-4 lg:text-lg xl:text-xl text-red-700"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.encodeError,expression:"encodeError"}]},[e._v("\n      "+e._s(e.$t("base32.Encoded_input_"))+"\n    ")]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.decodeError,expression:"decodeError"}]},[e._v("\n      "+e._s(e.$t("base32.Decoded_input_"))+"\n    ")]),e._v(" "),o("div",{staticClass:"mt-2 px-2 md:px-3 lg:px-4"},[e._v("\n      "+e._s(e.exception)+"\n    ")])]),e._v(" "),o("layout-footer-simple",{staticClass:"font-mono text-gray-600 text-center"},[o("div",[o("span",[e._v("\n        "+e._s(e.$t("base32.Documentation.text"))+"\n      ")]),e._v(" "),o("a",{staticClass:"a-indigo",attrs:{target:"_blank",href:e.$t("base32.Documentation.href")}},[e._v("\n        "+e._s(e.$t("base32.Documentation.href"))+"\n      ")])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("span",[e._v("\n        npm:\n      ")]),e._v(" "),o("a",{attrs:{target:"_blank",href:"https://www.npmjs.com/package/@voken/base32"}},[e._v("\n        https://www.npmjs.com/package/@voken/base32\n      ")])]),e._v(" "),o("div",{staticClass:"mt-2"},[o("span",[e._v("\n        GitHub:\n      ")]),e._v(" "),o("a",{attrs:{target:"_blank",href:"https://github.com/voken1000g/npm-base32"}},[e._v("\n        https://github.com/voken1000g/npm-base32\n      ")])])])],1)}),[],!1,null,"68c4d4ae",null);t.default=component.exports;installComponents(component,{LayoutFooterSimple:o(226).default,LayoutW:o(76).default})}}]);