(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{426:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"thread-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread-loader"}},[t._v("#")]),t._v(" thread-loader")]),t._v(" "),a("p",[t._v("启动该loader需要600ms的开销，建议只用于耗时的操作"),a("code",[t._v("babel-lader")]),t._v("等")]),t._v(" "),a("p",[t._v("为了减少启动loader的延迟，可以进行预热")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  threadLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warmup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the number of spawned workers, defaults to (number of cpus - 1) or")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fallback to 1 when require('os').cpus() is undefined")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// workers: 4,")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number of jobs a worker processes in parallel")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defaults to 20")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("workerParallelJobs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional node.js arguments")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("workerNodeArgs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--max-old-space-size=1024'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allow to respawn a dead worker pool")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// respawning slows down the entire compilation")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and should be set to false for development")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("poolRespawn")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// timeout for killing the worker processes when idle")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defaults to 500 (ms)")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can be set to Infinity for watching builds to keep workers alive")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("poolTimeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number of jobs the poll distributes to the workers")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defaults to 200")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// decrease of less efficient but more fair distribution")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("poolParallelJobs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name of the pool")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can be used to create different pools with elsewise identical options")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-pool'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'less-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'thread-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("时间统计如下表所示")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("none")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("less-loader")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("vue-loader")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("babel-loader")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("babel-loader+vue-loader")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("less-loader + babel-loader + vue-loader")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("31493")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("31922")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32550")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32338")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("33555")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("28358")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("31574")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32239")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32778")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32070")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32864")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32087")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("31358")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32241")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32594")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32325")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32920")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("27461")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("32593")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("31453")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32698")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32076")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("33126")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("27334")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("32191")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("31851")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32892")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32789")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("33011")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32399")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("31305")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32363")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32892")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32664")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("33136")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("28162")])])])]),t._v(" "),a("p",[t._v("给单个耗时的loader放入进程池提升并不明显。在三个loader都放入进程池后打包速度有一定提升，可能是因为项目体积比较小，待后续项目体积进一步增大后再次尝试。")])])}),[],!1,null,null,null);e.default=n.exports}}]);