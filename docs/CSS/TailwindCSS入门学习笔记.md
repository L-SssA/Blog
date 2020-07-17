---
title: TailwindCSS入门学习笔记
---

# TailwindCSS 入门学习笔记

> ### 参考资源
> > [官方文档](https://www.tailwindcss.cn/docs/installation)

## 安装
&emsp;&emsp;TailwindCSS 官方提供
### 使用 cdn 引入
&emsp;&emsp;在 HTML 页面头部添加如下代码即可（cdn 是什么和 cdn 怎么使用这里就不在赘述）。

```HTML
<link href="https://cdn.bootcdn.net/ajax/libs/tailwindcss/1.4.6/tailwind.min.css" rel="stylesheet">
```

:::warning 注意
使用 cdn 引入使用 TailwindCSS 会失去十分多 TailwindCSS 的特性，但是初学时或者只需要使用 TailwindCSS 的默认样式来说，cdn 也勉强能使用。
:::

### 使用 npm 安装
&emsp;&emsp;这是官方比较推荐的安装方法，因为通过 npm 安装可以使用 config 文件对 TailwindCSS 进行个性化定制，修改默认配置和新增全局配置（如颜色、插件等等）。安装方法如下：
* 使用 npm 安装依赖
```bash
npm install tailwindcss -D
```
* 在 css 文件中添加如下代码以引入 TailwindCSS
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
* 使用 TailwindCSS 脚手架命令编译 css 文件为普通的 css 文件
```bash
npx tailwindcss build <input-file-name> -o <output-file-name>
```
:::tip
&emsp;&emsp;上述代码意思为，使用 TailwindCSS 编译含有 TailwindCSS 指令的 css 文件为普通的 css 文件。其中 ```<input-file-name>``` 为需要编译的文件路径，```<output-file-name>``` 为编译后输出的文件路径。
:::
* 最后在页面中引入编译后的 css 文件即可。
:::warning 注意
&emsp;&emsp;这是使用 ```npm``` 安装 ```TailwindCSS```，但只是单纯使用了 ```TailwindCSS``` 进行 css 文件构建，如果要结合 ```webpack``` 使用，请看下一节。
:::

### 在 webpack 中使用和 PostCSS
&emsp;&emsp;首先需要注意，在 webpack 中 TailwindCSS 是作为 PostCSS 的插件被使用的。因此，需要先了解 PostCSS 的使用方法，后面 TailwindCSS 的引入则会是一气呵成。  

#### 什么是 PostCSS？
&emsp;&emsp;在[PostCSS官网](https://www.postcss.com.cn/)的首页中，一行大字写着```PostCSS 是一个用 JavaScript 工具和插件转换 CSS 代码的工具```，从字面意思理解，PostCSS 的工作对象是 CSS 代码，并且工作方式是通过使用 JavaScript 工具和插件。  
&emsp;&emsp;在查阅了一定的参考文章以后，我总结得出 PostCSS 可以被理解为一个```可以开发并使用的插件```的平台，```并且这些插件是针对于处理 CSS 的```。而 PostCSS 本身，做的只是将 CSS 转换为 AST（abstract syntax tree，抽象语法树），然后将这个 AST 传递给插件函数进行处理，最后再转换为普通的 CSS 字符串输出回给页面。在这个过程中，PostCSS 仿佛是一条加工流水线，而真正对 CSS 产生影响的是这些插件，由此可见，称 PostCSS 为“平台”也是十分准确。
:::tip 
&emsp;&emsp;更多内容请看[PostCSS 究竟是什么，是做什么的](http://davidtheclark.com/its-time-for-everyone-to-learn-about-postcss)
:::

#### 如何使用 PostCSS？
&emsp;&emsp;要使用 PostCSS，首先要清楚一点， PostCSS 的处理对象是什么？前文提到过，是 CSS 代码，或者说是 CSS 文件。  
&emsp;&emsp;再者，根据[官方文档](https://github.com/postcss/postcss#usage)，PostCSS 是作为一个构建工具的扩展来工作的，此处为 webpack。  
&emsp;&emsp;PostCSS 的使用分一下几步：
* 运行如下代码，使用 npm 安装 ```postcss-loader``` 包到项目中。
```bash
npm install postcss-loader
```
* 在 webpack 中添加 postcss-loader。
  * 找到 webpack 的配置文件 webpack.config.js 中对应解析 CSS 文件（Sass、Less等等文件的规则也包含在内）的 rules。
  * 在处理 CSS 文件的阶段插入 postcss-loader，具体代码如下：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader' // 此处加入
          }
        ]
      }
    ]
  }
}
```
:::warning 注意几点
&emsp;&emsp;处理 CSS 文件的阶段指的是在 webpack 解析转化样式文件为普通 CSS 代码的阶段。例如后缀名为 .scss 的文件，它本身需要使用 sass-loader 将其翻译为 CSS 文件，再进行后续与 CSS 文件相同的处理，而 postcss-loader 则是在 sass-loader 处理完之后再进行处理。  
&emsp;&emsp;配置过 webpack 的朋友应该知道，解析规则中的 use 中的每一个 loader 有两种写法，一是直接使用 loader 名称的字符串，这是针对没有配置项的 loader 的情况，二则是使用包含名为 loader 的属性的对象，这是针对需要使用 options 的属性对 loader 进行配置的情况。在使用 postcss-loader 时，建议以对象形式传入，无论是以外部文件配置（后文会介绍）或是 options 进行配置。
:::
* 选择合适的插件，添加到 postcss-loader 的配置中，代码如下：
```js
// 外部配置文件形式，在根目录下创建 postcss.config.js 文件并在文件中添加如下代码。
module.exports = {
  plugins: [ // 添加了一个插件
    require('autoprefixer') // 自动添加浏览器适配前缀插件
  ]
}

// options 形式，在 loader 对象中添加 options 属性并在其中添加 plugins 数组属性，代码如下：
{
    loader: 'postcss-loader' ，
    options: {
        plugins: [
            require('autoprefixer'),
        ]
    }
}
```

#### 添加 TailwindCSS 到 PostCSS 中
&emsp;&emsp;了解完上述内容以后，应该十分清楚 PostCSS 的使用了，而 ```TailwindCSS``` 则只需要在 ```postcss-loader``` 的 ```plugins``` 中使用 ```require``` 函数解析 TailwindCSS 即可，代码如下：
```js
plugins: [
    require('tailwindcss'), // 引入 tailwindcss
    require('autoprefixer'),
]
```

## 使用感受和 TailwindCSS 的使用
&emsp;&emsp;TailwindCSS 跟大多数 CSS 框架一样，采用的是类名的方式引用它封装好的样式。不同的是，TailwindCSS 官方没有提供任何的内建组件，取而代之的是更基础的```工具类```（utility classes），让可以使用直接在 HTML 源码上构建一个完全定制化的设计。  
&emsp;&emsp;也就是说 TailwindCSS 与其他框架的不同之处在于，TailwindCSS 主要是对一些基础样式进行封装，而不对组件进行封装。使用下来我的最大感受是，虽然它不能很方便的实现各种组件，但是在响应式页面的制作上却十分的方便。查看样式表更加可以清楚地知道，这个 CSS 框架就是为响应式页面设计的，因为它的大小单位基本采用 rem 。  
&emsp;&emsp;至于基本的样式类名，这里可能不会再过多赘述，在[官网](https://www.tailwindcss.cn/)上方的搜索栏可以很方便地查得到。这里要讲讲的是关于```响应式设计```，TailwindCSS 是怎么做的。

### 响应式设计
&emsp;&emsp;先来看看[官方文档](https://www.tailwindcss.cn/docs/responsive-design)中的如下代码：

```css
/* Small (sm) */
@media (min-width: 640px) { /* ... */ }

/* Medium (md) */
@media (min-width: 768px) { /* ... */ }

/* Large (lg) */
@media (min-width: 1024px) { /* ... */ }

/* Extra Large (xl) */
@media (min-width: 1280px) { /* ... */ }
```

&emsp;&emsp;从上述 CSS 媒体查询中可知，TailwindCSS 的响应式格式分为4个大小，分别是 sm、md、lg 和 xl，对应的最小宽度分别为640px、768px、1024px以及1280px。这里采用的是 min-width ，显而易见这里有一个响应式设计的小技巧，就是应该从最小宽度（这里是 640px）开始进行响应式设计，然后向大宽度进行设配。  
&emsp;&emsp;那么 sm、md、lg 和 xl 究竟是什么呢？它们是类名做响应式样式时的标识符。怎么理解这句话？看看下面这行代码：

```HTML
<img class="w-16 md:w-32 lg:w-48" src="...">
```

&emsp;&emsp;上述代码中，img 赋予了3个宽度，分别是 w-16、w-32 和 w-48，而在 w-32 和 w-48 的前面分别有 md 和 lg 两个标识符，代表的是当屏幕最小宽度大于 ```md（768px）```时，采用 ```w-32``` 的宽度，同理，当屏幕最小宽度大于 ```lg（1024px）```时，采用 ```w-48``` 的宽度。

### 样式内联
&emsp;&emsp;这里的“样式内联”和“内联样式”不同，它并不是指 HTML 元素中的 style 属性，而是指在 CSS 文件中的 @apply 指令。在使用了 TailwindCSS 解析的 CSS 文件中，当你添加了```如下代码```，就以为着你给 ```.btn``` 这个类内联了 TailwindCSS 默认属性中的 ```text-red-500```、```border```、```w-48``` 这三个样式。
```css
/* 单独一行写 */
.btn {
  @apply text-red-500;
  @apply border;
  @apply w-48;
}

/* 整合一行写（不推荐，因为有时编辑器尽管运行没错误，语法校正也会报错，这真的超级烦！！！） */
.btn {
  @apply text-red-500 border w-48;
}
```

::: warning 注意
&emsp;&emsp;为了避免一些错误，TailwindCSS 推荐在内联自定义样式时遵循以下规则：
* 在修改基础样式时，应该在引入 base 文件和 components 文件之间，即如下示例：
```css
@tailwind base;

h1 {
  @apply text-2xl;
}
h2 {
  @apply text-xl;
}
h3 {
  @apply text-lg;
}
a {
  @apply text-blue-600 underline;
}

@tailwind components;

@tailwind utilities;
```

* 而在自定义组件，就是自定义类名中添加样式内联，应该在引入 components 文件和 utilities 文件之间，即如下示例：
```css
@tailwind base;

@tailwind components;

.btn-blue {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
.btn-blue:hover {
  @apply bg-blue-700;
}

@tailwind utilities;
```

至于为什么需要这样添加，估计是因为需要防止默认样式被覆盖导致的样式问题吧（但我本人使用时并没有遇到这样的问题，所以不做过多赘述）。
:::

### 个性化主题配置
&emsp;&emsp;TailwindCSS 提供个性化的主题配置，它可以让你在不改动原来的熟悉的类名格式的情况下，添加一些新的样式。举个例子，TailwindCSS 中改变文字颜色的类名为：```text-gray-500```、```text-green-500``` 等等，这些文字颜色样式形如 ```text-<颜色名>[-颜色等级]```。此时，当你产生了自定义文字颜色的需求时，你可以创建 ```tailwind.config.js``` 文件，在文件中添加如下代码：
```js
module.exports = {
    purge: [],
    theme: {
        extend: {
            colors: { 
                myRed: "#c6d1d1", // 颜色是随便写的
                myBlue: {
                    "100": "#c6d1d1",
                    "200": "#c6d2d2",
                    "300": "#c6d3d3",
                    "400": "#c6d4d4",
                    "500": "#c6d5d5",
                }
            }
        },
    },
    variants: {},
    plugins: [],
}
```
&emsp;&emsp;上述代码中，添加了两种颜色，分别是 myRed 和 myBlue，这两种颜色将会注册到颜色表中。两个颜色区别是，myRed 为单独颜色，而 myBlue 则是以色阶的方式注册。当你需要使用到 myRed 时，只需要在 HTML 元素的类名中添加 ```text-myRed``` 即可应用字体颜色。而要用到 myBlue 时，则需要添加上对应的数值，如 ```text-myBlue-300```。同时，其他涉及颜色的样式也能使用这个颜色，例如设置背景颜色为浅灰色的类名为：```bg-gray-300```，则设置背景颜色为 myRed 色的类名为：```bg-myRed```，myBlue 同理。  
&emsp;&emsp;在上述代码中，还需要注意一点，在 ```theme``` 中，注册 ```colors``` 的位置的外层使用了一层 ```extend``` 对象包裹着，这表示，我所注册的这个 ```colors```是继承自默认颜色表的，当类名重复时，会自动覆盖默认颜色表中的颜色。假设不写在 ```extend``` 中，会导致整个默认颜色表被覆盖，因此，除非有特殊需求，否则建议写在 extend 中。  
&emsp;&emsp;如果此时又有一个新的需求，你需要在原来默认颜色表的 red 中添加一个新的颜色色阶，你可以使用如下代码：

```js
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
    purge: [],
    theme: {
        extend: {
            colors: {
                red: {
                    ...colors.red,
                    "800": "#151841"
                }
            }
        },
    },
    variants: {},
    plugins: [],
}
```

&emsp;&emsp;上述代码中，首先在 defaultTheme 中获取了默认的 colors，使用解构的方式将默认的 red 颜色表解构到需要覆盖的 red 中，再在下方新增 ```800``` 这个色阶。这样，在使用颜色时，就可以使用形如 ```<style>-red-800``` 的样式了。  
&emsp;&emsp;此处使用颜色进行举例了个性化主题，还有很多不同的个性化适配可以参考[官方文档](https://www.tailwindcss.cn/docs/configuration)中，定制一栏的介绍。

## 总结
&emsp;&emsp;TailwindCSS 总体用下来还是不错的，主打个性化设计，不提供组件库，但对于想快速开发的人来说明显一点都不友好，在合适的场景使用合适的工具十分重要。