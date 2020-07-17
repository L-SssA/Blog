(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{403:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tailwindcss-入门学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tailwindcss-入门学习笔记"}},[t._v("#")]),t._v(" TailwindCSS 入门学习笔记")]),t._v(" "),a("blockquote",[a("h3",{attrs:{id:"参考资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资源"}},[t._v("#")]),t._v(" 参考资源")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.tailwindcss.cn/docs/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("  TailwindCSS 官方提供")]),t._v(" "),a("h3",{attrs:{id:"使用-cdn-引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-cdn-引入"}},[t._v("#")]),t._v(" 使用 cdn 引入")]),t._v(" "),a("p",[t._v("  在 HTML 页面头部添加如下代码即可（cdn 是什么和 cdn 怎么使用这里就不在赘述）。")]),t._v(" "),a("div",{staticClass:"language-HTML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.bootcdn.net/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("使用 cdn 引入使用 TailwindCSS 会失去十分多 TailwindCSS 的特性，但是初学时或者只需要使用 TailwindCSS 的默认样式来说，cdn 也勉强能使用。")])]),t._v(" "),a("h3",{attrs:{id:"使用-npm-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm-安装"}},[t._v("#")]),t._v(" 使用 npm 安装")]),t._v(" "),a("p",[t._v("  这是官方比较推荐的安装方法，因为通过 npm 安装可以使用 config 文件对 TailwindCSS 进行个性化定制，修改默认配置和新增全局配置（如颜色、插件等等）。安装方法如下：")]),t._v(" "),a("ul",[a("li",[t._v("使用 npm 安装依赖")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tailwindcss -D\n")])])]),a("ul",[a("li",[t._v("在 css 文件中添加如下代码以引入 TailwindCSS")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" utilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("使用 TailwindCSS 脚手架命令编译 css 文件为普通的 css 文件")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx tailwindcss build "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input-file-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("output-file-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("  上述代码意思为，使用 TailwindCSS 编译含有 TailwindCSS 指令的 css 文件为普通的 css 文件。其中 "),a("code",[t._v("<input-file-name>")]),t._v(" 为需要编译的文件路径，"),a("code",[t._v("<output-file-name>")]),t._v(" 为编译后输出的文件路径。")])]),t._v(" "),a("ul",[a("li",[t._v("最后在页面中引入编译后的 css 文件即可。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("  这是使用 "),a("code",[t._v("npm")]),t._v(" 安装 "),a("code",[t._v("TailwindCSS")]),t._v("，但只是单纯使用了 "),a("code",[t._v("TailwindCSS")]),t._v(" 进行 css 文件构建，如果要结合 "),a("code",[t._v("webpack")]),t._v(" 使用，请看下一节。")])]),t._v(" "),a("h3",{attrs:{id:"在-webpack-中使用和-postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-webpack-中使用和-postcss"}},[t._v("#")]),t._v(" 在 webpack 中使用和 PostCSS")]),t._v(" "),a("p",[t._v("  首先需要注意，在 webpack 中 TailwindCSS 是作为 PostCSS 的插件被使用的。因此，需要先了解 PostCSS 的使用方法，后面 TailwindCSS 的引入则会是一气呵成。")]),t._v(" "),a("h4",{attrs:{id:"什么是-postcss？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-postcss？"}},[t._v("#")]),t._v(" 什么是 PostCSS？")]),t._v(" "),a("p",[t._v("  在"),a("a",{attrs:{href:"https://www.postcss.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostCSS官网"),a("OutboundLink")],1),t._v("的首页中，一行大字写着"),a("code",[t._v("PostCSS 是一个用 JavaScript 工具和插件转换 CSS 代码的工具")]),t._v("，从字面意思理解，PostCSS 的工作对象是 CSS 代码，并且工作方式是通过使用 JavaScript 工具和插件。"),a("br"),t._v("\n  在查阅了一定的参考文章以后，我总结得出 PostCSS 可以被理解为一个"),a("code",[t._v("可以开发并使用的插件")]),t._v("的平台，"),a("code",[t._v("并且这些插件是针对于处理 CSS 的")]),t._v("。而 PostCSS 本身，做的只是将 CSS 转换为 AST（abstract syntax tree，抽象语法树），然后将这个 AST 传递给插件函数进行处理，最后再转换为普通的 CSS 字符串输出回给页面。在这个过程中，PostCSS 仿佛是一条加工流水线，而真正对 CSS 产生影响的是这些插件，由此可见，称 PostCSS 为“平台”也是十分准确。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("  更多内容请看"),a("a",{attrs:{href:"http://davidtheclark.com/its-time-for-everyone-to-learn-about-postcss",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostCSS 究竟是什么，是做什么的"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"如何使用-postcss？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-postcss？"}},[t._v("#")]),t._v(" 如何使用 PostCSS？")]),t._v(" "),a("p",[t._v("  要使用 PostCSS，首先要清楚一点， PostCSS 的处理对象是什么？前文提到过，是 CSS 代码，或者说是 CSS 文件。"),a("br"),t._v("\n  再者，根据"),a("a",{attrs:{href:"https://github.com/postcss/postcss#usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("，PostCSS 是作为一个构建工具的扩展来工作的，此处为 webpack。"),a("br"),t._v("\n  PostCSS 的使用分一下几步：")]),t._v(" "),a("ul",[a("li",[t._v("运行如下代码，使用 npm 安装 "),a("code",[t._v("postcss-loader")]),t._v(" 包到项目中。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" postcss-loader\n")])])]),a("ul",[a("li",[t._v("在 webpack 中添加 postcss-loader。\n"),a("ul",[a("li",[t._v("找到 webpack 的配置文件 webpack.config.js 中对应解析 CSS 文件（Sass、Less等等文件的规则也包含在内）的 rules。")]),t._v(" "),a("li",[t._v("在处理 CSS 文件的阶段插入 postcss-loader，具体代码如下：")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              importLoaders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postcss-loader'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处加入")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意几点")]),t._v(" "),a("p",[t._v("  处理 CSS 文件的阶段指的是在 webpack 解析转化样式文件为普通 CSS 代码的阶段。例如后缀名为 .scss 的文件，它本身需要使用 sass-loader 将其翻译为 CSS 文件，再进行后续与 CSS 文件相同的处理，而 postcss-loader 则是在 sass-loader 处理完之后再进行处理。"),a("br"),t._v("\n  配置过 webpack 的朋友应该知道，解析规则中的 use 中的每一个 loader 有两种写法，一是直接使用 loader 名称的字符串，这是针对没有配置项的 loader 的情况，二则是使用包含名为 loader 的属性的对象，这是针对需要使用 options 的属性对 loader 进行配置的情况。在使用 postcss-loader 时，建议以对象形式传入，无论是以外部文件配置（后文会介绍）或是 options 进行配置。")])]),t._v(" "),a("ul",[a("li",[t._v("选择合适的插件，添加到 postcss-loader 的配置中，代码如下：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外部配置文件形式，在根目录下创建 postcss.config.js 文件并在文件中添加如下代码。")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加了一个插件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'autoprefixer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动添加浏览器适配前缀插件")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options 形式，在 loader 对象中添加 options 属性并在其中添加 plugins 数组属性，代码如下：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postcss-loader'")]),t._v(" ，\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'autoprefixer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"添加-tailwindcss-到-postcss-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-tailwindcss-到-postcss-中"}},[t._v("#")]),t._v(" 添加 TailwindCSS 到 PostCSS 中")]),t._v(" "),a("p",[t._v("  了解完上述内容以后，应该十分清楚 PostCSS 的使用了，而 "),a("code",[t._v("TailwindCSS")]),t._v(" 则只需要在 "),a("code",[t._v("postcss-loader")]),t._v(" 的 "),a("code",[t._v("plugins")]),t._v(" 中使用 "),a("code",[t._v("require")]),t._v(" 函数解析 TailwindCSS 即可，代码如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tailwindcss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入 tailwindcss")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'autoprefixer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用感受和-tailwindcss-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用感受和-tailwindcss-的使用"}},[t._v("#")]),t._v(" 使用感受和 TailwindCSS 的使用")]),t._v(" "),a("p",[t._v("  TailwindCSS 跟大多数 CSS 框架一样，采用的是类名的方式引用它封装好的样式。不同的是，TailwindCSS 官方没有提供任何的内建组件，取而代之的是更基础的"),a("code",[t._v("工具类")]),t._v("（utility classes），让可以使用直接在 HTML 源码上构建一个完全定制化的设计。"),a("br"),t._v("\n  也就是说 TailwindCSS 与其他框架的不同之处在于，TailwindCSS 主要是对一些基础样式进行封装，而不对组件进行封装。使用下来我的最大感受是，虽然它不能很方便的实现各种组件，但是在响应式页面的制作上却十分的方便。查看样式表更加可以清楚地知道，这个 CSS 框架就是为响应式页面设计的，因为它的大小单位基本采用 rem 。"),a("br"),t._v("\n  至于基本的样式类名，这里可能不会再过多赘述，在"),a("a",{attrs:{href:"https://www.tailwindcss.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("上方的搜索栏可以很方便地查得到。这里要讲讲的是关于"),a("code",[t._v("响应式设计")]),t._v("，TailwindCSS 是怎么做的。")]),t._v(" "),a("h3",{attrs:{id:"响应式设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式设计"}},[t._v("#")]),t._v(" 响应式设计")]),t._v(" "),a("p",[t._v("  先来看看"),a("a",{attrs:{href:"https://www.tailwindcss.cn/docs/responsive-design",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("中的如下代码：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Small (sm) */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 640px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Medium (md) */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Large (lg) */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Extra Large (xl) */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1280px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("  从上述 CSS 媒体查询中可知，TailwindCSS 的响应式格式分为4个大小，分别是 sm、md、lg 和 xl，对应的最小宽度分别为640px、768px、1024px以及1280px。这里采用的是 min-width ，显而易见这里有一个响应式设计的小技巧，就是应该从最小宽度（这里是 640px）开始进行响应式设计，然后向大宽度进行设配。"),a("br"),t._v("\n  那么 sm、md、lg 和 xl 究竟是什么呢？它们是类名做响应式样式时的标识符。怎么理解这句话？看看下面这行代码：")]),t._v(" "),a("div",{staticClass:"language-HTML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("w-16 md:w-32 lg:w-48"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("  上述代码中，img 赋予了3个宽度，分别是 w-16、w-32 和 w-48，而在 w-32 和 w-48 的前面分别有 md 和 lg 两个标识符，代表的是当屏幕最小宽度大于 "),a("code",[t._v("md（768px）")]),t._v("时，采用 "),a("code",[t._v("w-32")]),t._v(" 的宽度，同理，当屏幕最小宽度大于 "),a("code",[t._v("lg（1024px）")]),t._v("时，采用 "),a("code",[t._v("w-48")]),t._v(" 的宽度。")]),t._v(" "),a("h3",{attrs:{id:"样式内联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式内联"}},[t._v("#")]),t._v(" 样式内联")]),t._v(" "),a("p",[t._v("  这里的“样式内联”和“内联样式”不同，它并不是指 HTML 元素中的 style 属性，而是指在 CSS 文件中的 @apply 指令。在使用了 TailwindCSS 解析的 CSS 文件中，当你添加了"),a("code",[t._v("如下代码")]),t._v("，就以为着你给 "),a("code",[t._v(".btn")]),t._v(" 这个类内联了 TailwindCSS 默认属性中的 "),a("code",[t._v("text-red-500")]),t._v("、"),a("code",[t._v("border")]),t._v("、"),a("code",[t._v("w-48")]),t._v(" 这三个样式。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 单独一行写 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" text-red-500"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" border"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" w-48"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 整合一行写（不推荐，因为有时编辑器尽管运行没错误，语法校正也会报错，这真的超级烦！！！） */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" text-red-500 border w-48"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("  为了避免一些错误，TailwindCSS 推荐在内联自定义样式时遵循以下规则：")]),t._v(" "),a("ul",[a("li",[t._v("在修改基础样式时，应该在引入 base 文件和 components 文件之间，即如下示例：")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" text-2xl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" text-xl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" text-lg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" text-blue-600 underline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" utilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("而在自定义组件，就是自定义类名中添加样式内联，应该在引入 components 文件和 utilities 文件之间，即如下示例：")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn-blue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" bg-blue-500 text-white font-bold py-2 px-4 rounded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".btn-blue:hover")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@apply")]),t._v(" bg-blue-700"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@tailwind")]),t._v(" utilities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])]),a("p",[t._v("至于为什么需要这样添加，估计是因为需要防止默认样式被覆盖导致的样式问题吧（但我本人使用时并没有遇到这样的问题，所以不做过多赘述）。")])]),t._v(" "),a("h3",{attrs:{id:"个性化主题配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个性化主题配置"}},[t._v("#")]),t._v(" 个性化主题配置")]),t._v(" "),a("p",[t._v("  TailwindCSS 提供个性化的主题配置，它可以让你在不改动原来的熟悉的类名格式的情况下，添加一些新的样式。举个例子，TailwindCSS 中改变文字颜色的类名为："),a("code",[t._v("text-gray-500")]),t._v("、"),a("code",[t._v("text-green-500")]),t._v(" 等等，这些文字颜色样式形如 "),a("code",[t._v("text-<颜色名>[-颜色等级]")]),t._v("。此时，当你产生了自定义文字颜色的需求时，你可以创建 "),a("code",[t._v("tailwind.config.js")]),t._v(" 文件，在文件中添加如下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    purge"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        extend"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            colors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n                myRed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#c6d1d1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 颜色是随便写的")]),t._v("\n                myBlue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#c6d1d1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#c6d2d2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#c6d3d3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"400"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#c6d4d4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#c6d5d5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    variants"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("  上述代码中，添加了两种颜色，分别是 myRed 和 myBlue，这两种颜色将会注册到颜色表中。两个颜色区别是，myRed 为单独颜色，而 myBlue 则是以色阶的方式注册。当你需要使用到 myRed 时，只需要在 HTML 元素的类名中添加 "),a("code",[t._v("text-myRed")]),t._v(" 即可应用字体颜色。而要用到 myBlue 时，则需要添加上对应的数值，如 "),a("code",[t._v("text-myBlue-300")]),t._v("。同时，其他涉及颜色的样式也能使用这个颜色，例如设置背景颜色为浅灰色的类名为："),a("code",[t._v("bg-gray-300")]),t._v("，则设置背景颜色为 myRed 色的类名为："),a("code",[t._v("bg-myRed")]),t._v("，myBlue 同理。"),a("br"),t._v("\n  在上述代码中，还需要注意一点，在 "),a("code",[t._v("theme")]),t._v(" 中，注册 "),a("code",[t._v("colors")]),t._v(" 的位置的外层使用了一层 "),a("code",[t._v("extend")]),t._v(" 对象包裹着，这表示，我所注册的这个 "),a("code",[t._v("colors")]),t._v("是继承自默认颜色表的，当类名重复时，会自动覆盖默认颜色表中的颜色。假设不写在 "),a("code",[t._v("extend")]),t._v(" 中，会导致整个默认颜色表被覆盖，因此，除非有特殊需求，否则建议写在 extend 中。"),a("br"),t._v("\n  如果此时又有一个新的需求，你需要在原来默认颜色表的 red 中添加一个新的颜色色阶，你可以使用如下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" colors "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tailwindcss/defaultTheme'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    purge"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        extend"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            colors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                red"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"800"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#151841"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    variants"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("  上述代码中，首先在 defaultTheme 中获取了默认的 colors，使用解构的方式将默认的 red 颜色表解构到需要覆盖的 red 中，再在下方新增 "),a("code",[t._v("800")]),t._v(" 这个色阶。这样，在使用颜色时，就可以使用形如 "),a("code",[t._v("<style>-red-800")]),t._v(" 的样式了。"),a("br"),t._v("\n  此处使用颜色进行举例了个性化主题，还有很多不同的个性化适配可以参考"),a("a",{attrs:{href:"https://www.tailwindcss.cn/docs/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("中，定制一栏的介绍。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("  TailwindCSS 总体用下来还是不错的，主打个性化设计，不提供组件库，但对于想快速开发的人来说明显一点都不友好，在合适的场景使用合适的工具十分重要。")])])}),[],!1,null,null,null);s.default=e.exports}}]);