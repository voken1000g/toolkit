(window.webpackJsonp=window.webpackJsonp||[]).push([[22,25],{505:function(t,e,r){"use strict";var l=r(15),n=r(53),o=r(54),f=r(182),h=r(126),c=r(25),d=r(101).f,v=r(102).f,m=r(28).f,x=r(506).trim,w="Number",N=l.Number,C=N,I=N.prototype,y=o(r(127)(I))==w,_="trim"in String.prototype,E=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var r,l,n,o=(e=_?e.trim():x(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+e}for(var code,f=e.slice(2),i=0,c=f.length;i<c;i++)if((code=f.charCodeAt(i))<48||code>n)return NaN;return parseInt(f,l)}}return+e};if(!N(" 0o1")||!N("0b1")||N("+0x1")){N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(y?c((function(){I.valueOf.call(r)})):o(r)!=w)?f(new C(E(e)),r,N):E(e)};for(var R,A=r(23)?d(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;A.length>S;S++)n(C,R=A[S])&&!n(N,R)&&m(N,R,v(C,R));N.prototype=I,I.constructor=N,r(32)(l,w,N)}},506:function(t,e,r){var l=r(11),n=r(67),o=r(25),f=r(507),h="["+f+"]",c=RegExp("^"+h+h+"*"),d=RegExp(h+h+"*$"),v=function(t,e,r){var n={},h=o((function(){return!!f[t]()||"​"!="​"[t]()})),c=n[t]=h?e(m):f[t];r&&(n[r]=c),l(l.P+l.F*h,"String",n)},m=v.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(d,"")),t};t.exports=v},507:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},508:function(t,e,r){"use strict";r.r(e);r(505);var l={name:"SvgPatternRect",props:{width:{type:Number,default:404},height:{type:Number,default:784}},computed:{viewBox:function(){return"0 0 "+this.width+" "+this.height}}},n=r(7),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{fill:"none",width:t.width,height:t.height,viewBox:t.viewBox}},[r("defs",[r("pattern",{attrs:{id:"f210dbf6-a58d-4871-961e-36d5016a0f49",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[r("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),r("rect",{attrs:{width:t.width,height:t.height,fill:"url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"}})])}),[],!1,null,"4766f43b",null);e.default=component.exports},509:function(t,e,r){"use strict";r.r(e);var l={name:"LayoutBgA",props:{theme:{type:String,default:"RL"}}},n=r(7),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative overflow-hidden"},[r("div",{staticClass:"hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"},[r("div",{staticClass:"relative h-full max-w-screen-xl mx-auto"},["RL"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute bottom-0 left-full transform -translate-y-40 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:786}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute top-0 right-full transform translate-y-40 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:786}})]:"RLR"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-12 left-full transform -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute top-1/2 right-full transform -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2",attrs:{width:394,height:394}}),t._v(" "),r("svg-pattern-rect",{staticClass:"absolute bottom-12 left-full transform -translate-x-1/4 -translate-x-1/4 lg:-translate-x-1/2",attrs:{width:394,height:394}})]:"CORNER"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4\n                                          lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",attrs:{width:394,height:786}})]:"LEFT"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 right-1/2 transform -translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:"RIGHT"===t.theme?[r("svg-pattern-rect",{staticClass:"absolute top-0 left-1/2 transform translate-x-1/2 -translate-y-8",attrs:{width:640,height:2048}})]:t._e()],2)]),t._v(" "),r("div",{staticClass:"relative"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgPatternRect:r(508).default})}}]);