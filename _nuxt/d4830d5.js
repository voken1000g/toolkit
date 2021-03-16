(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{507:function(t,r,e){"use strict";(function(t){e(36),e(17),e(77),e(78);var o=e(121),n=e.n(o),m=e(64),f=e.n(m),c=e(502),d=e.n(c),l=e(175),h=e.n(l),D=e(503),v=e.n(D),y=e(174);r.a={name:"decodes",layout:"indigoWave",components:{VueAvatar:y.a},head:function(){return{title:this.$t("nav.Messenger")}},data:function(){return{base32:h.a,fromData:"",fromDataSig:t.from(""),fromDataPublicKey:t.from(""),fromDataAddress:"",fromDataDecrypted:t.from(""),fromDataError:""}},watch:{fromData:function(){this.fromData||(this.fromDataError="")}},computed:{bufFromDataDecoded:function(){if(this.fromData)try{var r=h.a.decode(this.fromData);return this.fromDataError="",r}catch(t){this.fromDataError="[Base32 Decode Error] "+t.message}return t.from("")},bufFromDataKey:function(){return this.bufFromDataDecoded.length>0?this.bufFromDataDecoded.slice(0,20):t.from("")},bufFromDataBodyEncrypted:function(){return this.bufFromDataKey.length>0?this.bufFromDataDecoded.slice(20):t.from("")},bufFromDataBody:function(){return this.bufFromDataBodyEncrypted.length>0?d.a.decrypt(this.bufFromDataBodyEncrypted,this.bufFromDataKey):t.from("")},intFromDataSigLength:function(){if(this.bufFromDataKey.length>0)try{var t=this.bufFromDataBody.slice(0,1).toString("hex"),r=parseInt(t,16);return this.fromDataError="",r}catch(t){this.fromDataError="[Parse Error] Cannot parse signature length: "+t.message}return 0},bufFromDataSig:function(){if(this.intFromDataSigLength>0)try{var r=this.bufFromDataBody.slice(1,1+this.intFromDataSigLength);return this.fromDataError="",r}catch(t){this.fromDataError="[Slice Error] Cannot parse signature: "+t.message}return t.from("")},bufFromDataPublicKey:function(){if(this.bufFromDataBody.length>0)try{var r=this.bufFromDataBody.slice(1+this.intFromDataSigLength,1+this.intFromDataSigLength+33);return this.fromDataError="",r}catch(t){this.fromDataError="[Slice Error] Cannot parse sender's Public Key body: "+t.message}return t.from("")},strFromDataPublicKey:function(){if(33===this.bufFromDataPublicKey.length)try{var t=n.a.toVPub(this.bufFromDataPublicKey);return this.fromDataError="",t}catch(t){this.fromDataError="[Public Key Error] Cannot convert sender's Public Key: "+t.message}return""},boolFromDataSigVerified:function(){if(this.bufFromDataPublicKey.length>0)try{var t=v.a.verify(this.bufFromDataKey,this.bufFromDataSig,this.bufFromDataPublicKey);return this.fromDataError="",t}catch(t){this.fromDataError="[Verify Signature Error] "+t.message}return!1},strFromDataSig:function(){if(this.boolFromDataSigVerified>0)try{var r=h.a.encode(this.bufFromDataSig);return this.fromDataError="",r}catch(t){this.fromDataError="[Encode Error] Cannot encode the signature of the message: "+t.message}return t.from("")},strFromDataAddress:function(){if(33===this.bufFromDataPublicKey.length)try{var t=f.a.fromPublicKey(this.bufFromDataPublicKey);return this.fromDataError="",t}catch(t){this.fromDataError="[Address Error] Cannot convert sender's Address: "+t.message}return""},bufFromDataOriginalData:function(){if(this.bufFromDataBody.length>0)try{var r=this.bufFromDataBody.slice(1+this.intFromDataSigLength+33);return this.fromDataError="",r}catch(t){this.fromDataError="[Slice Error] Cannot parse original message body: "+t.message}return t.from("")}}}}).call(this,e(9).Buffer)},522:function(t,r,e){var content=e(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("f818beee",content,!0,{sourceMap:!1})},542:function(t,r,e){"use strict";e(522)},543:function(t,r,e){var o=e(20)((function(i){return i[1]}));o.push([t.i,".decode[data-v-ad1fad82]{\n  background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from:#f3faf7;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(243, 250, 247, 0));\n  --tw-gradient-to:#7edce2;\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}",""]),t.exports=o},589:function(t,r,e){"use strict";e.r(r);var o=e(507).a,n=(e(542),e(7)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"resp-wide pb-12"},[e("article",{staticClass:"resp-mt prose lg:prose-lg xl:prose-xl max-w-none"},[e("h1",[t._v("\n      "+t._s(t.$t("nav.Messenger_Decode"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("messenger.You_can_decode_and_verify__"))+"\n    ")])]),t._v(" "),e("div",{staticClass:"my-6 border-t"}),t._v(" "),e("div",{staticClass:"decode mt-4 md:mt-6 lg:mt-8 xl:mt-10 space-y-6 py-6 lg:py-10 px-2 sm:px-4"},[e("h2",{staticClass:"font-bold text-2xl text-gray-700 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Decrypt__Verify_A_Message"))+"\n    ")]),t._v(" "),e("div",{staticClass:"w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0"},[e("div",{staticClass:"w-full",class:{error:t.fromData&&t.fromDataError}},[e("label",{staticClass:"text-sm",attrs:{for:"from_message"}},[t._v("\n          "+t._s(t.$t("messenger.From_encode_data"))+"\n        ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fromData,expression:"fromData"}],staticClass:"textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none",attrs:{id:"from_message",rows:"10",placeholder:t.$t("messenger.Input_the_encoded_data__")},domProps:{value:t.fromData},on:{input:function(r){r.target.composing||(t.fromData=r.target.value)}}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.fromDataError,expression:"fromDataError"}],staticClass:"ml-2 font-bold text-red-700"},[t._v("\n          "+t._s(t.fromDataError)+"\n        ")])]),t._v(" "),t.bufFromDataOriginalData.length>0?e("div",{staticClass:"w-full"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.boolFromDataSigVerified,expression:"boolFromDataSigVerified"}],staticClass:"pt-6 pb-2 break-all"},[e("div",{staticClass:"w-14 h-14 mx-auto bg-white rounded-md shadow-md"},[e("vue-avatar",{attrs:{value:t.strFromDataAddress}})],1),t._v(" "),e("div",{staticClass:"mt-4 mx-auto"},[e("div",{staticClass:"text-sm text-gray-500 text-center"},[t._v("\n              "+t._s(t.strFromDataAddress)+"\n            ")]),t._v(" "),e("div",{staticClass:"py-4 px-6 font-bold text-gray-700 break-all"},[t._v("\n              "+t._s(t.bufFromDataOriginalData.toString())+"\n            ")])])])]):t._e()]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.boolFromDataSigVerified,expression:"boolFromDataSigVerified"}],staticClass:"mt-10 lg:mt-4 px-4 flex text-green-600 space-x-4 font-mono"},[e("fa",{staticClass:"text-3xl",attrs:{icon:["fas","signature"]}}),t._v(" "),e("div",[e("div",[t._v("\n          "+t._s(t.$t("messenger.Signature_Verification_Passed_"))+"\n        ")]),t._v(" "),e("div",{staticClass:"mt-1 text-xs md:text-sm break-all"},[t._v("\n          "+t._s(t.strFromDataSig)+"\n        ")])])],1)])])}),[],!1,null,"ad1fad82",null);r.default=component.exports}}]);