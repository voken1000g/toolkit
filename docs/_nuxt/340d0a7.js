(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{100:function(t,e,o){"use strict";o.r(e);var r=o(98),n={name:"FlyoutWallet",data:function(){return{walletLinks:r.a}},methods:{toggleFlyout:function(){this.$store.dispatch("nav/TOGGLE_FLYOUT_WALLET")}}},l=(o(187),o(9)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative"},[o("button",{staticClass:"button-flyout",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.toggleFlyout(e)}}},[t._v("\n    "+t._s(t.$t("nav.Wallet"))+"\n  ")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.nav.flyoutWallet,expression:"$store.state.nav.flyoutWallet"}],staticClass:"absolute z-10 left-0 transform -translate-x-0 mt-2 px-2 w-screen max-w-md sm:px-0 transition duration-200 ease-in-out"},[o("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[o("div",{staticClass:"flyout-items relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(t.walletLinks,(function(link){return o("nuxt-link",{key:link.path,attrs:{to:t.localePath(link.path)}},[o("div",{staticClass:"div-icon"},[o("fa",{attrs:{icon:link.icon}})],1),t._v(" "),o("div",{staticClass:"ml-4"},[o("div",{staticClass:"item-title"},[t._v("\n              "+t._s(t.$t(link.title))+"\n            ")]),t._v(" "),o("p",{staticClass:"item-description"},[t._v("\n              "+t._s(t.$t(link.description))+"\n            ")])])])})),1)])])])}),[],!1,null,"4c959670",null);e.default=component.exports},127:function(t,e,o){var content=o(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("32d8d232",content,!0,{sourceMap:!1})},128:function(t,e,o){var content=o(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("05b14566",content,!0,{sourceMap:!1})},136:function(t,e,o){"use strict";var r={components:{SiteNav:o(99).default},methods:{hideNavMenu:function(){this.$store.dispatch("nav/HIDE_ALL")}}},n=o(9),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"min-h-screen bg-gradient-to-br from-white to-indigo-200",on:{click:this.hideNavMenu}},[e("div",{staticClass:"mx-auto"},[e("site-nav"),this._v(" "),e("Nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{SiteNav:o(99).default})},137:function(t,e,o){"use strict";var r=o(9),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"min-h-screen flex justify-center bg-gradient-to-br from-white to-indigo-200"},[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},138:function(t,e,o){"use strict";var r=o(9),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-indigo-200"},[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},150:function(t,e,o){o(151),t.exports=o(152)},183:function(t,e,o){var content=o(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("38dfa7e4",content,!0,{sourceMap:!1})},184:function(t,e,o){(e=o(41)(!1)).push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}a{background-color:transparent}b{font-weight:bolder}code{font-family:monospace,monospace;font-size:1em}img{border-style:none}button,input,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button{text-transform:none}[type=button],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}textarea{overflow:auto}[hidden],template{display:none}h1,h2,h3,h4,p{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}ol,ul{list-style:none;margin:0;padding:0}html{font-family:Inter var,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #d2d6dc}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}h1,h2,h3,h4{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,textarea{padding:0;line-height:inherit;color:inherit}code{font-family:Hack,monospace,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}.form-textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d2d6dc;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-size:1rem;line-height:1.5}.form-textarea::-moz-placeholder{color:#9fa6b2;opacity:1}.form-textarea:-ms-input-placeholder{color:#9fa6b2;opacity:1}.form-textarea::placeholder{color:#9fa6b2;opacity:1}.form-textarea:focus{outline:none;box-shadow:0 0 0 3px rgba(164,202,254,.45);border-color:#a4cafe}.prose{color:#374151;max-width:65ch}.prose [class~=lead]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose a{color:#5850ec;text-decoration:none;font-weight:600}.prose ol{counter-reset:list-counter;margin-top:1.25em;margin-bottom:1.25em}.prose ol>li{position:relative;counter-increment:list-counter;padding-left:1.75em}.prose ol>li:before{content:counter(list-counter) ".";position:absolute;font-weight:400;color:#6b7280}.prose ul>li{position:relative;padding-left:1.75em}.prose ul>li:before{content:"";position:absolute;background-color:#d2d6dc;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.prose h3,.prose h4{color:#1a202c;font-weight:600}.prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.prose code{color:#161e2e;font-weight:600;font-size:.875em}.prose code:after,.prose code:before{content:"`"}.prose{font-size:1rem;line-height:1.75}.prose p{margin-top:1.25em;margin-bottom:1.25em}.prose img{margin-top:2em;margin-bottom:2em}.prose h2 code{font-size:.875em}.prose h3 code{font-size:.9em}.prose ul{margin-top:1.25em;margin-bottom:1.25em}.prose li{margin-top:.5em;margin-bottom:.5em}.prose ol>li:before{left:0}.prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.prose>ul>li>:first-child{margin-top:1.25em}.prose>ul>li>:last-child{margin-bottom:1.25em}.prose>ol>li>:first-child{margin-top:1.25em}.prose>ol>li>:last-child{margin-bottom:1.25em}.prose ol ol,.prose ol ul,.prose ul ol,.prose ul ul{margin-top:.75em;margin-bottom:.75em}.prose>:first-child,.prose h2+*,.prose h3+*,.prose h4+*{margin-top:0}.prose>:last-child{margin-bottom:0}.prose h1,.prose h2,.prose h3,.prose h4{color:#161e2e}.space-x-0>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(0px*var(--space-x-reverse));margin-left:calc(0px*(1 - var(--space-x-reverse)))}.space-x-2>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(0.5rem*var(--space-x-reverse));margin-left:calc(0.5rem*(1 - var(--space-x-reverse)))}.space-y-4>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(1rem*(1 - var(--space-y-reverse)));margin-bottom:calc(1rem*var(--space-y-reverse))}.space-x-4>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(1rem*var(--space-x-reverse));margin-left:calc(1rem*(1 - var(--space-x-reverse)))}.space-y-6>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(1.5rem*(1 - var(--space-y-reverse)));margin-bottom:calc(1.5rem*var(--space-y-reverse))}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-indigo-800{--bg-opacity:1;background-color:#42389d;background-color:rgba(66,56,157,var(--bg-opacity))}.focus\\:bg-indigo-700:focus,.hover\\:bg-indigo-700:hover{--bg-opacity:1;background-color:#5145cd;background-color:rgba(81,69,205,var(--bg-opacity))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--gradient-color-stops))}.from-white{--gradient-from-color:#fff;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,hsla(0,0%,100%,0))}.from-gray-300{--gradient-from-color:#d2d6dc;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(210,214,220,0))}.from-red-100{--gradient-from-color:#fde8e8;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(253,232,232,0))}.from-blue-200{--gradient-from-color:#c3ddfd;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(195,221,253,0))}.to-gray-400{--gradient-to-color:#9fa6b2}.to-orange-200{--gradient-to-color:#fcd9bd}.to-indigo-200{--gradient-to-color:#cddbfe}.to-indigo-300{--gradient-to-color:#b4c6fc}.border-gray-300{--border-opacity:1;border-color:#d2d6dc;border-color:rgba(210,214,220,var(--border-opacity))}.border-indigo-500{--border-opacity:1;border-color:#6875f5;border-color:rgba(104,117,245,var(--border-opacity))}.border-indigo-700{--border-opacity:1;border-color:#5145cd;border-color:rgba(81,69,205,var(--border-opacity))}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-1{flex:1 1 0%}.flex-grow{flex-grow:1}.flex-shrink-0{flex-shrink:0}.font-sans{font-family:Inter var,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.font-mono{font-family:Hack,monospace,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}.font-medium{font-weight:500}.font-bold{font-weight:700}.h-6{height:1.5rem}.h-8{height:2rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-full{height:100%}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.text-5xl{font-size:3rem}.text-6xl{font-size:4rem}.text-7xl{font-size:6rem}.leading-7{line-height:1.75rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-8{margin-top:2rem;margin-bottom:2rem}.mx-auto{margin-left:auto;margin-right:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mr-4{margin-right:1rem}.ml-4{margin-left:1rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.mt-16{margin-top:4rem}.max-w-none{max-width:none}.max-w-md{max-width:28rem}.max-w-2xl{max-width:42rem}.min-h-screen{min-height:100vh}.opacity-0{opacity:0}.opacity-100{opacity:1}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.overflow-hidden{overflow:hidden}.p-2{padding:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pl-4{padding-left:1rem}.pt-6{padding-top:1.5rem}.pr-6{padding-right:1.5rem}.pb-36{padding-bottom:9rem}.pointer-events-none{pointer-events:none}.static{position:static}.absolute{position:absolute}.relative{position:relative}.inset-y-0{top:0;bottom:0}.right-0{right:0}.left-0{left:0}.shadow-xs{box-shadow:0 0 0 1px rgba(0,0,0,.05)}.shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.text-left{text-align:left}.text-center{text-align:center}.text-gray-300{--text-opacity:1;color:#d2d6dc;color:rgba(210,214,220,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#4b5563;color:rgba(75,85,99,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#374151;color:rgba(55,65,81,var(--text-opacity))}.text-gray-800{--text-opacity:1;color:#252f3f;color:rgba(37,47,63,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#161e2e;color:rgba(22,30,46,var(--text-opacity))}.text-red-300{--text-opacity:1;color:#f8b4b4;color:rgba(248,180,180,var(--text-opacity))}.text-red-600{--text-opacity:1;color:#e02424;color:rgba(224,36,36,var(--text-opacity))}.text-red-700{--text-opacity:1;color:#c81e1e;color:rgba(200,30,30,var(--text-opacity))}.text-orange-500{--text-opacity:1;color:#ff5a1f;color:rgba(255,90,31,var(--text-opacity))}.text-green-500{--text-opacity:1;color:#0e9f6e;color:rgba(14,159,110,var(--text-opacity))}.text-indigo-300{--text-opacity:1;color:#b4c6fc;color:rgba(180,198,252,var(--text-opacity))}.text-indigo-400{--text-opacity:1;color:#8da2fb;color:rgba(141,162,251,var(--text-opacity))}.text-indigo-600{--text-opacity:1;color:#5850ec;color:rgba(88,80,236,var(--text-opacity))}.focus\\:text-white:focus,.hover\\:text-white:hover{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.align-text-bottom{vertical-align:text-bottom}.break-all{word-break:break-all}.w-6{width:1.5rem}.w-8{width:2rem}.w-14{width:3.5rem}.w-48{width:12rem}.w-full{width:100%}.w-screen{width:100vw}.z-10{z-index:10}.z-50{z-index:50}.gap-3{grid-gap:.75rem;gap:.75rem}.gap-6{grid-gap:1.5rem;gap:1.5rem}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.origin-top-right{transform-origin:top right}.scale-95{--transform-scale-x:.95;--transform-scale-y:.95}.scale-100{--transform-scale-x:1;--transform-scale-y:1}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-75{transition-duration:75ms}.duration-100{transition-duration:.1s}.duration-200{transition-duration:.2s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:h-10{height:2.5rem}.sm\\:text-sm{font-size:.875rem}.sm\\:p-8{padding:2rem}.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:px-4{padding-left:1rem;padding-right:1rem}.sm\\:w-10{width:2.5rem}.sm\\:gap-8{grid-gap:2rem;gap:2rem}}@media (min-width:768px){.md\\:space-x-1>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(0.25rem*var(--space-x-reverse));margin-left:calc(0.25rem*(1 - var(--space-x-reverse)))}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:items-center{align-items:center}.md\\:flex-shrink-0{flex-shrink:0}.md\\:h-12{height:3rem}.md\\:text-base{font-size:1rem}.md\\:my-3{margin-top:.75rem;margin-bottom:.75rem}.md\\:mt-4{margin-top:1rem}.md\\:mt-6{margin-top:1.5rem}.md\\:mt-10{margin-top:2.5rem}.md\\:max-w-xl{max-width:36rem}.md\\:max-w-2xl{max-width:42rem}.md\\:px-3{padding-left:.75rem;padding-right:.75rem}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:pl-4{padding-left:1rem}.md\\:pl-6{padding-left:1.5rem}.md\\:pt-8{padding-top:2rem}.md\\:w-12{width:3rem}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:prose-lg{font-size:1.125rem;line-height:1.7777778}.lg\\:prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.lg\\:prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.lg\\:prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.lg\\:prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.lg\\:prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.lg\\:prose-lg img{margin-top:1.7777778em;margin-bottom:1.7777778em}.lg\\:prose-lg code{font-size:.8888889em}.lg\\:prose-lg h2 code{font-size:.8666667em}.lg\\:prose-lg h3 code{font-size:.875em}.lg\\:prose-lg ol,.lg\\:prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.lg\\:prose-lg ol>li{padding-left:1.6666667em}.lg\\:prose-lg ol>li:before{left:0}.lg\\:prose-lg ul>li{padding-left:1.6666667em}.lg\\:prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.lg\\:prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.lg\\:prose-lg>ul>li>:first-child{margin-top:1.3333333em}.lg\\:prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-lg>ol>li>:first-child{margin-top:1.3333333em}.lg\\:prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-lg ol ol,.lg\\:prose-lg ol ul,.lg\\:prose-lg ul ol,.lg\\:prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.lg\\:prose-lg>:first-child,.lg\\:prose-lg h2+*,.lg\\:prose-lg h3+*,.lg\\:prose-lg h4+*{margin-top:0}.lg\\:prose-lg>:last-child{margin-bottom:0}.lg\\:space-y-0>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(0px*(1 - var(--space-y-reverse)));margin-bottom:calc(0px*var(--space-y-reverse))}.lg\\:space-x-3>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(0.75rem*var(--space-x-reverse));margin-left:calc(0.75rem*(1 - var(--space-x-reverse)))}.lg\\:space-y-6>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(1.5rem*(1 - var(--space-y-reverse)));margin-bottom:calc(1.5rem*var(--space-y-reverse))}.lg\\:space-x-10>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(2.5rem*var(--space-x-reverse));margin-left:calc(2.5rem*(1 - var(--space-x-reverse)))}.lg\\:block{display:block}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:h-16{height:4rem}.lg\\:text-lg{font-size:1.125rem}.lg\\:text-xl{font-size:1.25rem}.lg\\:text-3xl{font-size:1.875rem}.lg\\:mx-0{margin-left:0;margin-right:0}.lg\\:my-4{margin-top:1rem;margin-bottom:1rem}.lg\\:my-12{margin-top:3rem;margin-bottom:3rem}.lg\\:mt-3{margin-top:.75rem}.lg\\:mt-4{margin-top:1rem}.lg\\:mt-6{margin-top:1.5rem}.lg\\:mt-8{margin-top:2rem}.lg\\:mt-12{margin-top:3rem}.lg\\:max-w-screen-lg{max-width:1024px}.lg\\:px-4{padding-left:1rem;padding-right:1rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:pt-4{padding-top:1rem}.lg\\:pl-8{padding-left:2rem}.lg\\:pt-10{padding-top:2.5rem}.lg\\:shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.lg\\:w-16{width:4rem}.lg\\:gap-4{grid-gap:1rem;gap:1rem}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media (min-width:1280px){.xl\\:prose-xl{font-size:1.25rem;line-height:1.8}.xl\\:prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.xl\\:prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.xl\\:prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.xl\\:prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.xl\\:prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.xl\\:prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.xl\\:prose-xl img{margin-top:2em;margin-bottom:2em}.xl\\:prose-xl code{font-size:.9em}.xl\\:prose-xl h2 code{font-size:.8611111em}.xl\\:prose-xl h3 code{font-size:.9em}.xl\\:prose-xl ol,.xl\\:prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.xl\\:prose-xl li{margin-top:.6em;margin-bottom:.6em}.xl\\:prose-xl ol>li{padding-left:1.8em}.xl\\:prose-xl ol>li:before{left:0}.xl\\:prose-xl ul>li{padding-left:1.8em}.xl\\:prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.xl\\:prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.xl\\:prose-xl>ul>li>:first-child{margin-top:1.2em}.xl\\:prose-xl>ul>li>:last-child{margin-bottom:1.2em}.xl\\:prose-xl>ol>li>:first-child{margin-top:1.2em}.xl\\:prose-xl>ol>li>:last-child{margin-bottom:1.2em}.xl\\:prose-xl ol ol,.xl\\:prose-xl ol ul,.xl\\:prose-xl ul ol,.xl\\:prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.xl\\:prose-xl>:first-child,.xl\\:prose-xl h2+*,.xl\\:prose-xl h3+*,.xl\\:prose-xl h4+*{margin-top:0}.xl\\:prose-xl>:last-child{margin-bottom:0}.xl\\:block{display:block}.xl\\:flex{display:flex}.xl\\:hidden{display:none}.xl\\:h-20{height:5rem}.xl\\:text-lg{font-size:1.125rem}.xl\\:text-xl{font-size:1.25rem}.xl\\:text-2xl{font-size:1.5rem}.xl\\:text-3xl{font-size:1.875rem}.xl\\:text-4xl{font-size:2.25rem}.xl\\:mt-4{margin-top:1rem}.xl\\:mt-8{margin-top:2rem}.xl\\:mt-10{margin-top:2.5rem}.xl\\:mt-12{margin-top:3rem}.xl\\:mt-14{margin-top:3.5rem}.xl\\:mt-20{margin-top:5rem}.xl\\:max-w-2xl{max-width:42rem}.xl\\:max-w-screen-xl{max-width:1280px}.xl\\:py-8{padding-top:2rem;padding-bottom:2rem}.xl\\:pl-10{padding-left:2.5rem}.xl\\:pt-12{padding-top:3rem}.xl\\:w-20{width:5rem}.xl\\:w-2\\/3{width:66.666667%}.xl\\:w-1\\/4{width:25%}.xl\\:gap-6{grid-gap:1.5rem;gap:1.5rem}.xl\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}@media (min-width:1580px){.\\32xl\\:text-xl{font-size:1.25rem}.\\32xl\\:my-16{margin-top:4rem;margin-bottom:4rem}.\\32xl\\:mt-6{margin-top:1.5rem}.\\32xl\\:mt-8{margin-top:2rem}.\\32xl\\:mt-12{margin-top:3rem}.\\32xl\\:mt-14{margin-top:3.5rem}.\\32xl\\:mt-16{margin-top:4rem}.\\32xl\\:mt-28{margin-top:7rem}.\\32xl\\:max-w-screen-2xl{max-width:1580px}.\\32xl\\:pl-12{padding-left:3rem}.\\32xl\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}}',""]),t.exports=e},185:function(t,e,o){var content=o(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("a07579c2",content,!0,{sourceMap:!1})},186:function(t,e,o){(e=o(41)(!1)).push([t.i,'a,button,input{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.input-indigo,button,button:focus,input,input:focus{outline:2px solid transparent;outline-offset:2px}.input-indigo{border-width:1px;--border-opacity:1;border-color:#b4c6fc;border-color:rgba(180,198,252,var(--border-opacity));border-radius:.375rem;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.input-indigo:focus{--border-opacity:1;border-color:#6875f5;border-color:rgba(104,117,245,var(--border-opacity));box-shadow:0 0 0 3px rgba(180,198,252,.45)}.a-indigo{--text-opacity:1;color:#5145cd;color:rgba(81,69,205,var(--text-opacity))}.a-indigo:hover{--text-opacity:1;color:#6875f5;color:rgba(104,117,245,var(--text-opacity))}.error label{font-weight:700;--text-opacity:1;color:#c81e1e;color:rgba(200,30,30,var(--text-opacity))}.success label{--text-opacity:1;color:#046c4e;color:rgba(4,108,78,var(--text-opacity))}.error input,.error textarea{--bg-opacity:1;background-color:#fdf2f2;background-color:rgba(253,242,242,var(--bg-opacity));--border-opacity:1;border-color:#e02424;border-color:rgba(224,36,36,var(--border-opacity));--text-opacity:1;color:#c81e1e;color:rgba(200,30,30,var(--text-opacity))}.error input:focus,.error textarea:focus{--border-opacity:1;border-color:#f05252;border-color:rgba(240,82,82,var(--border-opacity));box-shadow:0 0 0 3px rgba(248,180,180,.45)}.success input,.success textarea{--bg-opacity:1;background-color:#f3faf7;background-color:rgba(243,250,247,var(--bg-opacity));--border-opacity:1;border-color:#057a55;border-color:rgba(5,122,85,var(--border-opacity));--text-opacity:1;color:#046c4e;color:rgba(4,108,78,var(--text-opacity))}.success input:focus,.success textarea:focus{--border-opacity:1;border-color:#0e9f6e;border-color:rgba(14,159,110,var(--border-opacity));box-shadow:0 0 0 3px rgba(132,225,188,.45)}.comp-wallet:nth-child(odd){background-image:linear-gradient(to bottom right,var(--gradient-color-stops));--gradient-from-color:#e5edff;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(229,237,255,0));--gradient-to-color:#7edce2}.comp-wallet label{display:block;--text-opacity:1;color:#374151;color:rgba(55,65,81,var(--text-opacity));text-align:left}.comp-wallet input,.comp-wallet label{font-family:Hack,monospace,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:.875rem}.comp-wallet input{width:100%;padding:1rem 3rem 1rem 1rem;border-radius:.375rem}.comp-wallet .input-private{--bg-opacity:1;background-color:#feecdc;background-color:rgba(254,236,220,var(--bg-opacity));border-width:2px;--border-opacity:1;border-color:#ff8a4c;border-color:rgba(255,138,76,var(--border-opacity));--text-opacity:1;color:#b43403;color:rgba(180,52,3,var(--text-opacity))}.comp-wallet .input-private:focus{--border-opacity:1;border-color:#ff5a1f;border-color:rgba(255,90,31,var(--border-opacity));box-shadow:0 0 0 3px rgba(253,186,140,.45)}.comp-wallet .input-public{--bg-opacity:1;background-color:#def7ec;background-color:rgba(222,247,236,var(--bg-opacity));border-width:2px;--border-opacity:1;border-color:#31c48d;border-color:rgba(49,196,141,var(--border-opacity));--text-opacity:1;color:#03543f;color:rgba(3,84,63,var(--text-opacity))}.comp-wallet .input-public:focus{--border-opacity:1;border-color:#0e9f6e;border-color:rgba(14,159,110,var(--border-opacity));box-shadow:0 0 0 3px rgba(132,225,188,.45)}.comp-wallet .btn-copy{--text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--text-opacity))}.comp-wallet .btn-copy:hover{--text-opacity:1;color:#252f3f;color:rgba(37,47,63,var(--text-opacity))}.comp-wallet .btn-copy:focus{--text-opacity:1;color:#4b5563;color:rgba(75,85,99,var(--text-opacity));outline:2px solid transparent;outline-offset:2px}',""]),t.exports=e},187:function(t,e,o){"use strict";o(127)},188:function(t,e,o){(e=o(41)(!1)).push([t.i,".button-flyout[data-v-4c959670]{padding:.5rem .75rem;border-radius:.375rem;font-size:.875rem;font-weight:500;line-height:1.25rem;--text-opacity:1;color:#b4c6fc;color:rgba(180,198,252,var(--text-opacity))}.button-flyout[data-v-4c959670]:hover{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));--bg-opacity:1;background-color:#5145cd;background-color:rgba(81,69,205,var(--bg-opacity))}.button-flyout[data-v-4c959670]:focus{outline:2px solid transparent;outline-offset:2px}.flyout-items a[data-v-4c959670]{margin:-.75rem;padding:.75rem;display:flex;align-items:flex-start;border-radius:.5rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.flyout-items a[data-v-4c959670]:hover{--bg-opacity:1;background-color:#e5edff;background-color:rgba(229,237,255,var(--bg-opacity))}.flyout-items a .div-icon[data-v-4c959670]{flex-shrink:0;height:2rem;width:2rem;display:flex;align-items:center;justify-content:center;font-size:1.125rem;--text-opacity:1;color:#5850ec;color:rgba(88,80,236,var(--text-opacity))}.item-title[data-v-4c959670]{font-size:1rem;font-weight:500;--text-opacity:1;color:#161e2e;color:rgba(22,30,46,var(--text-opacity))}.item-description[data-v-4c959670]{margin-top:.25rem;font-size:.875rem;--text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--text-opacity))}",""]),t.exports=e},189:function(t,e,o){"use strict";o(128)},190:function(t,e,o){(e=o(41)(!1)).push([t.i,".nav-h[data-v-dea48132]{padding:.5rem .75rem;border-radius:.375rem;font-size:.875rem;font-weight:500;line-height:1.25rem;--text-opacity:1;color:#b4c6fc;color:rgba(180,198,252,var(--text-opacity))}.nav-h[data-v-dea48132]:focus,.nav-h[data-v-dea48132]:hover{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));--bg-opacity:1;background-color:#5145cd;background-color:rgba(81,69,205,var(--bg-opacity))}.nav-h[data-v-dea48132]:focus{outline:2px solid transparent;outline-offset:2px}.nav-h.nuxt-link-exact-active[data-v-dea48132]{--bg-opacity:1;background-color:#362f78;background-color:rgba(54,47,120,var(--bg-opacity))}.nav-v[data-v-dea48132]{margin-top:.25rem;display:block;padding:.5rem .75rem;border-radius:.375rem;font-size:1rem;font-weight:500;--text-opacity:1;color:#b4c6fc;color:rgba(180,198,252,var(--text-opacity))}.nav-v[data-v-dea48132]:first-child{margin-top:0}.nav-v[data-v-dea48132]:focus,.nav-v[data-v-dea48132]:hover{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));--bg-opacity:1;background-color:#5145cd;background-color:rgba(81,69,205,var(--bg-opacity))}.nav-v[data-v-dea48132]:focus{outline:2px solid transparent;outline-offset:2px}.nav-v.nuxt-link-exact-active[data-v-dea48132]{--bg-opacity:1;background-color:#362f78;background-color:rgba(54,47,120,var(--bg-opacity))}.profile-h[data-v-dea48132]{display:block;padding:.5rem 1rem;font-size:.875rem;line-height:1.25rem;--text-opacity:1;color:#5145cd;color:rgba(81,69,205,var(--text-opacity))}.profile-h[data-v-dea48132]:focus,.profile-h[data-v-dea48132]:hover{--bg-opacity:1;background-color:#e5edff;background-color:rgba(229,237,255,var(--bg-opacity))}.profile-h[data-v-dea48132]:focus{outline:2px solid transparent;outline-offset:2px}.profile-v[data-v-dea48132]{margin-top:.25rem;display:block;padding:.5rem .75rem;border-radius:.375rem;font-size:1rem;font-weight:500;--text-opacity:1;color:#8da2fb;color:rgba(141,162,251,var(--text-opacity))}.profile-v[data-v-dea48132]:first-child{margin-top:0}.profile-v[data-v-dea48132]:focus,.profile-v[data-v-dea48132]:hover{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));--bg-opacity:1;background-color:#5145cd;background-color:rgba(81,69,205,var(--bg-opacity))}.profile-v[data-v-dea48132]:focus{outline:2px solid transparent;outline-offset:2px}",""]),t.exports=e},191:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return r})),o.d(e,"mutations",(function(){return n})),o.d(e,"actions",(function(){return l}));var r=function(){return{menuMobile:!1,languageMenu:!1,flyoutWallet:!1}},n={SET_MENU_MOBILE:function(t,e){t.menuMobile=e},SET_LANGUAGE_MENU:function(t,e){t.languageMenu=e},SET_FLYOUT_WALLET:function(t,e){t.flyoutWallet=e}},l={TOGGLE_MENU_MOBILE:function(t){(0,t.commit)("SET_MENU_MOBILE",!t.state.menuMobile)},TOGGLE_LANGUAGE_MENU:function(t){(0,t.commit)("SET_LANGUAGE_MENU",!t.state.languageMenu)},TOGGLE_FLYOUT_WALLET:function(t){(0,t.commit)("SET_FLYOUT_WALLET",!t.state.flyoutWallet)},HIDE_ALL:function(t){var e=t.commit;t.state;e("SET_MENU_MOBILE",!1),e("SET_LANGUAGE_MENU",!1),e("SET_FLYOUT_WALLET",!1)}}},200:function(t,e,o){var map={"./avatar_en":[140,5],"./avatar_en.js":[140,5],"./avatar_zh":[141,6],"./avatar_zh.js":[141,6],"./base32_en":[142,7],"./base32_en.js":[142,7],"./base32_zh":[143,8],"./base32_zh.js":[143,8],"./en-US":[148,9],"./en-US.js":[148,9],"./nav_en":[144,10],"./nav_en.js":[144,10],"./nav_zh":[146,11],"./nav_zh.js":[146,11],"./wallet_en":[145,12],"./wallet_en.js":[145,12],"./wallet_zh":[147,13],"./wallet_zh.js":[147,13],"./zh-CN":[149,14],"./zh-CN.js":[149,14]};function r(t){if(!o.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return o.e(e[1]).then((function(){return o(r)}))}r.keys=function(){return Object.keys(map)},r.id=200,t.exports=r},35:function(t,e,o){"use strict";var r={name:"error",layout:"middleCenter",props:["error"]},n=o(9),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-gray-700 text-5xl"},[this._v("\n    Error\n    "+this._s(this.error.statusCode)+"\n  ")]),this._v(" "),e("h2",{staticClass:"mt-6 text-gray-600 text-2xl"},[this._v("\n    "+this._s(this.error.message)+"\n  ")])])}),[],!1,null,null,null);e.a=component.exports},76:function(t,e,o){"use strict";o.r(e);var r={name:"LayoutW"},n=o(9),component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},98:function(t,e,o){"use strict";e.a=[{title:"nav.Generator",description:"nav.Generator_",path:"wallet-generator",icon:["fas","wallet"]},{title:"nav.Validator",description:"nav.Validator_",path:"wallet-validator",icon:["fas","spell-check"]},{title:"nav.Avatar",description:"nav.Avatar_",path:"avatar",icon:["far","smile-wink"]}]},99:function(t,e,o){"use strict";o.r(e);var r=o(76),n=o(100),l=[{text:"Base32",path:"/base32"}],c=[{code:"en",iso:"en-US",file:"en-US.js",title:"English"},{code:"zh",iso:"zh-CN",file:"zh-CN.js",title:"简体中文"}],m=(o(98),{name:"SiteNav",components:{FlyoutWallet:n.default,LayoutW:r.default},data:function(){return{navigations:l,languages:c}},computed:{version:function(){return this.$store.state.version}},methods:{toggleLangMenu:function(){this.$store.dispatch("nav/TOGGLE_LANGUAGE_MENU")},toggleMobileMenu:function(){this.$store.dispatch("nav/TOGGLE_MENU_MOBILE")}}}),d=(o(189),o(9)),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"bg-indigo-800"},[o("layout-w",{staticClass:"border-b border-indigo-700"},[o("div",{staticClass:"h-16 flex justify-between"},[o("div",{staticClass:"flex space-x-2"},[o("div",{staticClass:"flex items-center md:hidden"},[o("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:text-white",attrs:{"aria-label":"Main menu","aria-expanded":"false"},on:{click:function(e){return e.stopPropagation(),t.toggleMobileMenu(e)}}},[o("svg",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.nav.menuMobile,expression:"!$store.state.nav.menuMobile"}],staticClass:"h-6 w-6",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t._v(" "),o("svg",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.nav.menuMobile,expression:"$store.state.nav.menuMobile"}],staticClass:"h-6 w-6",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),o("nuxt-link",{staticClass:"flex-shrink-0 flex items-center space-x-4",attrs:{to:t.localePath("/")}},[o("div",{staticClass:"text-indigo-300 text-3xl"},[o("fa",{attrs:{icon:["fas","tools"]}})],1),t._v(" "),o("div",{staticClass:"hidden lg:block font-sans text-indigo-300 text-2xl"},[t._v("\n            VOKEN "+t._s(t.$t("nav.Toolkit"))+"\n          ")])]),t._v(" "),o("div",{staticClass:"hidden md:pl-4 md:flex md:items-center md:space-x-1"},[o("flyout-wallet"),t._v(" "),t._l(t.navigations,(function(nav){return[o("nuxt-link",{staticClass:"nav-h",attrs:{to:t.localePath(nav.path)}},[t._v(t._s(t.$t("nav."+nav.text)))])]}))],2)],1),t._v(" "),o("div",{staticClass:"flex items-center"},[o("div",{staticClass:"hidden md:flex-shrink-0 md:flex md:items-center"},[o("div",{staticClass:"relative"},[o("div",[o("button",{staticClass:"flex text-2xl text-indigo-300 focus:outline-none focus:text-white",attrs:{id:"user-menu","aria-label":"User menu","aria-haspopup":"true"},on:{click:function(e){return e.stopPropagation(),t.toggleLangMenu(e)}}},[o("fa",{attrs:{icon:["fas","globe-americas"]}})],1)]),t._v(" "),o("transition",{attrs:{"enter-active-class":"transition ease-out duration-100","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.nav.languageMenu,expression:"$store.state.nav.languageMenu"}],staticClass:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50"},[o("div",{staticClass:"py-1 rounded-md bg-white shadow-xs",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"}},t._l(t.languages,(function(e){return t.$i18n.locale!==e.code?o("nuxt-link",{key:e.code,staticClass:"profile-h",attrs:{to:t.switchLocalePath(e.code)}},[t._v("\n                    "+t._s(e.title)+"\n                  ")]):t._e()})),1)])])],1)])])])]),t._v(" "),o("div",{staticClass:"md:hidden",class:{block:t.$store.state.nav.menuMobile,hidden:!t.$store.state.nav.menuMobile}},[o("div",{staticClass:"px-3 py-3"},[t._l(t.navigations,(function(nav){return[o("nuxt-link",{staticClass:"nav-v",attrs:{to:t.localePath(nav.path)}},[t._v(t._s(t.$t("nav."+nav.text)))])]}))],2),t._v(" "),o("div",{staticClass:"py-3 border-t border-indigo-500"},[o("div",{staticClass:"px-3"},t._l(t.languages,(function(e){return t.$i18n.locale!==e.code?o("nuxt-link",{key:e.code,staticClass:"profile-v",attrs:{to:t.switchLocalePath(e.code)}},[t._v("\n          "+t._s(e.title)+"\n        ")]):t._e()})),1)])])],1)}),[],!1,null,"dea48132",null);e.default=component.exports;installComponents(component,{FlyoutWallet:o(100).default,LayoutW:o(76).default})}},[[150,24,18,25]]]);