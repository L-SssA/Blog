---
title: Vuepress入门学习
# navbar: false
---

# Vuepress入门学习

> ### 参考资料：  
> > [官方文档](https://www.vuepress.cn/guide/)  
> > [我认为讲得很不错的B站视频教程（新，2020年04月09日重制）](https://www.bilibili.com/video/BV1vb411m7NY)
  
## 前期准备
* ```GitHub``` 个人账户，[官网](https://github.com/)注册。
* ```node.js``` [官网](https://nodejs.org/zh-cn/)下载安装。
* 依赖包管理工具：
  - ```npm```（安装 ```node.js``` 自带）。
  - VuePress 官方推荐使用 ```yarn```（[官网](https://yarn.bootcss.com/)下载安装，但这里还是使用 ```npm```）。
* 编辑器
  - 选择有很多，不一一列举。
  - 这里使用 ```VS Code```，[官网](https://code.visualstudio.com/)下载安装。
* 命令行工具：
  - 可以使用 windows 自带的命令行工具 ```cmd```、```PowerShell``` 等等，
  - 也可以使用 git 自带的 ```Git Bash```。
  - 还可以使用 VS Code 自带的终端工具（```这里采用```的就是这个终端工具）。
  - 还有一些其他的工具就不一一列举。
* 代码管理工具 ```git```，[官网](https://git-scm.com/)下载安装。

## 开始构建
### 使用 npm 全局安装 Vuepress
&emsp;&emsp;在控制台中执行以下命令即可全局安装 VuePress。

```bash
npm install -g vuepress
```

### 约定优于配置原则
&emsp;&emsp;按照[官方文档](vuepress.cn/guide/directory-structure.html#目录结构)的描述，Vuepress 遵循"**约定优于配置**"的原则进行文件管理。"**约定优于配置**"的意思是使用约定的方法让使用者遵循一些规范来构建项目，官方框架就会按照固定的形式来解析项目，比起一长串的配置项这样的方式显然更加直观。因此，官方给使用者提供了如下目录结构的规范：

```javascript
.  
├── docs // 构建时使用的根目录，理论上可以是任何文件名，但是建议为 docs，这样相对规范些。  
│   ├── .vuepress // 可选，用于存放全局的代码文件，包括配置、组件、静态资源等等。  
│   │   ├── components // 可选，的 Vue 组件均会被自动注册为全局组件，可以在 md 中通过标签的形式直接使用。  
│   │   ├── theme  // 可选，用于存放本地主题，也可以在这里开发自定义主题。
│   │   │   └──Layout.vue // 如果要开发自定义主题，则此文件为默认 Layout 文件。  
│   │   ├──public // 可选，静态资源文件夹，静态资源都会从此文件夹开始检索。
│   │   ├── styles // 可选，存放样式相关文件。
│   │   │   ├── index.styl // 可选，全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。  
│   │   │   └── palette.styl // 可选，用于重写默认颜色常量，或者设置新的 stylus 颜色常量。  
│   │   ├── templates // 可选，慎写，存储 HTML 模板文件，会直接改变页面的 HTML 模板。
│   │   │   ├── dev.html // 用于开发环境的 HTML 模板文件。
│   │   │   └── ssr.html // 构建时基于 Vue SSR 的 HTML 模板文件。
│   │   ├── config.js // 可选，配置文件的入口文件，也可以是 YML 或 toml。
│   │   └── enhanceApp.js // 可选，客户端应用的增强。
│   │   
│   ├── README.md // 会被编译为 index.html，在路由中会被检索为默认页面。
│   └── guide // 文章文件夹，可以使用路由的方式访问。
│       └── README.md  // 同上方 README.md，此处当访问 /guide/ 时会打开这个文档。
│   
└── package.json // 包文件 
```

&emsp;&emsp;根据上面的目录结构可知，一个最简单的 Vuepress 项包含一个根目录文件夹 ```docs``` 和主页页面 ```README.md```。

### 主页配置  
&emsp;&emsp;在官网中点击上方导航栏 ```主题```->```默认主题配置```->```首页``` 则会得到如下代码，这种代码是 ```yaml``` 格式的代码，写在 markdown 文件的头部，用 ```---``` 包裹，Vuepress 将会自动解析里面的配置作为页面属性。  
&emsp;&emsp;而下面一段代码则是默认主题中首页的配置项。直接粘贴到 docs 目录下作为首页的 ```README.md``` 文件头部，默认主题将会自动获取对应属性并渲染到主页上。

```yaml
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

&emsp;&emsp;这样，一个只有一个主页的 Vuepress 项目就做好了。

### 运行测试  
&emsp;&emsp;在构建完上述页面后，应该运行测试一下构建好的页面，尽管它是最简单的、还没有编写任何内容的页面。在项目根目录下使用控制台执行如下代码（VS Code 的控制台在上方导航栏中的 ```终端``` 的下拉列表中点击 ```新建终端``` 即可打开）。

```Bash
vuepress dev docs
```

&emsp;&emsp;命令中，docs 对应的就是 docs 文件夹的名字。 
&emsp;&emsp;等待页面编译完成后，vuepress 会监听对应的端口，此时打开浏览器，输入控制台打印的网址即可看到对应的效果。  
&emsp;&emsp;如果使用过 ```npm``` 的小伙伴应该知道可以在 ```package.json``` 中添加 ```scripts``` 脚本来封装一系列命令，因此在 ```package.json``` 中添加如下代码来封装对应操作（代码中的 build 为打包部署项目时用到的指令）。

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

&emsp;&emsp;添加完成后，可以通过在控制台执行 ```npm run dev``` 来运行 ```scripts``` 中封装的 ```dev``` 脚本，它的效果等同于 ```vuepress dev docs```。

## 构建多文章内容页
&emsp;&emsp;注意这里说的只是渲染不同的文档内容，由于 VuePress 是基于 Vue 开发的，因此本质上还是 SPA。
### 页面路由  
&emsp;&emsp;想要构建拥有不同内容页的 Vuepress 项目，页面路由是必须的。Vuepress 中，页面路由是需要规范的：

| 文件路径               | 对应的页面路由             |
| :-:                   | :-:                       |
| ```README.md```       | ```/```                   |
| ```guide/README.md``` | ```/guide/```             |
| ```guide/guide.md```  | ```/guide/guide[.html]``` |

&emsp;&emsp;从上面表格不难看出，Vuepress 以页面文件夹的```根目录```作为起点开始检索页面（此处显然以 ```docs``` 为根目录），以某一个页面作为默认访问页面（此处是 ```README.md```），此外其他页面则以对应文件名为访问地址。  
&emsp;&emsp;不仅如此，如果了解过 Vuepress 对 markdown 文档的转换，可以知道 ```README.md``` 会转换成 ```index.html```，而其他文档则会转换为 ```文件名.html```，然后当路由访问对应文件夹名而没有访问文件名时，路由会直接查找 ```index.html```（这种路由方式我忘记是什么时候用过了，但是的确很常见，见到这种路由方式应该快速理解，而且 ```GitHub Pages``` 也是用的这种路由方式）。

### 配置导航栏   
&emsp;&emsp;导航栏的配置需要创建配置文件，而在目录结构中说过，应该创建在 ```.vuepress``` 文件夹中创建 ```config.js``` 作为配置文件的入口。文件创建完成之后，应该使用 ```module.exports = {}``` 导出配置对象，在 ```{}``` 中编写对应的设置。  
&emsp;&emsp;导航栏的配置在 ```themeConfig``` 对象中完成。在 ```config.js``` 中添加如下代码配置导航栏属性，默认主题会根据配置完成导航栏的渲染。注意，导航栏可以设置普通的导航按钮和导航下拉列表。

```javascript
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',  // 设置导航栏上的 logo
  },
  nav: [
    { text: 'Home', link: '/' }, // 导航按钮写法，text 是显示的文本，link 是对应的路由地址。
    { text: 'Guide', link: '/guide/' },
    { text: 'External', link: 'https://google.com' },
    {
      text: 'list',  
      items:[ // 用 items 代替 link 则会渲染成一个列表。
      // items 为一个数组，数组中保存对应列表的 item 对象，写法和单按钮写法相同。
        {text: 'item1', link: 'link1'},
        {text: 'item2', link: 'link2'},
        {text: 'item3', link: 'link3'}
      ]
    }
  ]
}
```

&emsp;&emsp;此时，如果有一个需求，某些页面不需要显示导航栏，则可以在文档头部 ```yaml``` 配置中添加 ```navbar:false```。如果全都不需要导航栏，则可以在 ```config.js``` 的 ```themeConfig``` 中添加 ``` navbar: false``` 来禁用所有导航栏。

### 侧边栏
&emsp;&emsp;侧边栏通过在 ```config.js``` 的 ```themeConfig``` 中配置 sidebar 来实现。写法如下：

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [ // sidebar 数组保存想要自定义生成的列表对应的页面的路由地址。路由规则不再过多赘述，唯一需要注意的是，文件名后缀可以使用 .md，但可以省略为什么不呢。
      '/',  // 以 / 结尾表示该目录下的 README.md 页面
      '/page-a', // 列表标题按照文章中的标题文字显示
      ['/page-b', 'Explicit link text'] // 也可以使用数组形式自定义文字
    ]
  }
}
```

&emsp;&emsp;我对于自定义侧边栏的看法，多文章侧边栏一般是用于整合多文档系列教程，需要有多个文章在内容上有关联，显然对于博客文章并不十分适用，因此也不展开叙述，有兴趣可到[官方文档](https://www.vuepress.cn/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)查看。  
&emsp;&emsp;但是 VuePress 的自动侧边栏还是推荐使用的，因为它可以在文章内部自动生成标题连接，使目录结构更加清晰地展现，同时，VuePress 的侧边栏还有导航功能，可以快速跳转到对应的小节，使用方法是不设置 sidebar 或者给 sidebar 设置默认值 ```'auto'``` （注意是表示为字符串值，需要把引号加上），至于局部设置和全局设置可以参照上面的导航栏。

## 个性化配置
&emsp;&emsp;为了是页面更加美观，个性化设置是必不可少的，以下为默认主题下的个性化配置：
### 最后更新时间
&emsp;&emsp;VuePress 通过获取 ```git``` 最后一次提交的 UNIX 时间戳来实现文章的最后更新时间，然后，通过处理，将时间戳转换为合适的日期格式显示在文件底部。注意点有以下几点：
* lastUpdated 属于插件，这表示如果自定义主题，则需要自己安装并整合。但默认主题对这个插件进行了整合，因此，只需要在 ```themeConfig.lastUpdated``` 中设置```对应的文字前缀```或者 ```true```。当设置为 true 时，文字默认显示为 ```Last Updated:[time]```，否则显示设置好的文字。
* ```lastUpdated``` 是基于 ```git``` 时间戳的，因此只有文章添加到 git 管理中，时间才会显示。 

&emsp;&emsp;如果对 lastUpdated 的时间显示格式不太满意，则需要通过 ```moment.js``` 来对时间进行格式化。具体操作如下：
* 使用 ```npm``` 下载 moment 包：在控制台中输入指令 ```npm install moment``` 即可。
* 在 ```config.js``` 中，使用 ```const moment = require('moment')``` 的方法引入 moment，这样就可以在 ```config.js``` 中使用 moment.js 了。
* 最后配置项中添加如下代码：

```javascript
module.exports = {
   plugins: [ // 插件模块
        [
            '@vuepress/last-updated', // 插件名称
            {
                transformer: (timestamp) => { // lastUpdated 插件提供的函数
                    return moment(timestamp).format('lll'); // 返回经过 moment.js 处理的结果
                }
            }
        ]
    ]
}
```

* 以上代码段为我个人的配置格式，更多配置参考[官方文档](https://www.vuepress.cn/plugin/official/plugin-last-updated.html)，同时，moment.js 处理的格式也有更多，可以参考[moment.js 官方文档](http://momentjs.cn/)。

### 页面跳转平滑滚动
&emsp;&emsp;这个功能是当你在 sidebar 点击某个标题进行跳转时，页面进行滚动跳转，而不是直接跳到对应的锚点。  
&emsp;&emsp;原本我以为这是 VuePress 自带的功能，查看了默认主题的源码才知道是一个叫 ```smooth-scroll``` 的插件。但不管这么说，在默认主题下，直接在 ```config.js``` 中添加如下代码即可启用功能：

```javascript
module.exports = {
  themeConfig : {
    smoothScroll: true
  }
}
```

### 自定义样式和自定义页面类
&emsp;&emsp;如果看过官方文档，那可能会被默认主题配置中的自定义页面类的教程坑一下。先看看[官方文档](https://www.vuepress.cn/theme/default-theme-config.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5%E9%9D%A2%E7%B1%BB)中描述的自定义页面类的步骤：
* 在 markdown 文件中的 ```YAML front matter``` 块中声明一个 ```pageClass```：

```yaml
---
pageClass: custom-page-class
---
```

* 然后就可以写针对该页面的 CSS 样式了：

```CSS
/* .vuepress/override.styl */
.theme-container.custom-page-class {
  /* 特定页面的 CSS */
}
```

&emsp;&emsp;结合上面的代码，那我们可以猜测，```theme-container``` 是 VuePress 页面默认的样式，而 pageClass 则是在同一页面元素下，多加一个名为 ```custom-page-class``` 的类，那么就可以合理解释官方实例的写法了。事实上，使用浏览器调试查看 HTML 代码可以发现，它就是这么做的。  
&emsp;&emsp;如果你按照上述步骤操作却没有产生效果，那你可能踩了跟我一样的坑。在上述代码中，CSS 文件标注的文件名是 ```.vuepress/override.styl```。那它的意思是 .vuepres 文件夹下的 override.styl？其实不是，我猜它要表达的是在 ```.vuepres``` 文件夹下 ```某个重写默认样式的文件```。  
&emsp;&emsp;那么如何重写默认样式的文件呢？  
&emsp;&emsp;看看[官网](https://www.vuepress.cn/config/#styling)怎么说。在 .vuepress 文件夹中，添加 ```styles``` 文件夹，然后在这个文件夹中添加 ```index.styl``` 这是约定重写默认样式的入口文件。创建完 index.styl 以后，直接写对应的样式即可。  
&emsp;&emsp;此时，如果要分离模块样式代码，只需要新建文件夹，然后将自定义的样式文件 ```@import``` 到 ```index.styl``` 即可。 

:::tip 关于类名
直接使用浏览器调试器查看元素的 class。。。 
::: 

&emsp;&emsp;综上所述：
* 如果你只需要重写页面样式，直接在 ```.vuepres/styles/index.styl``` 中重写样式即可，但这会影响全局。
* 如果需要只针对某个页面进行样式调整，则只需要在文档的 ```YAML front matter``` 中配置 ```pageClass``` 来给当前页面添加类型，这样就可以通过 CSS 选择器来针对某个页面来改变样式，至于 CSS 选择器，这里就不在赘述。

### 自定义页面布局
&emsp;&emsp;通过[官方文档](https://www.vuepress.cn/theme/default-theme-config.html#%E7%89%B9%E5%AE%9A%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80)，我们可以知道，VuePress 提供了特定页面布局，而这个特定页面布局实际上指的是 Vue 中的页面组件。  
&emsp;&emsp;对于 Vue 的组件化管理，我是这么理解的：

* 使用 vue 模板文件创建组件。
* 当 vue 文件被直接访问时，它相当于一个页面。
* 而当 vue 文件被引入时，vue 文件资源就可以被作为一个页面的某个模块使用。

&emsp;&emsp;这里官方说的特定页面布局其实就是将文档按照 vue 文件设置的页面进行渲染。如果指向的 vue 文件为空，则当访问这个文档的页面地址时，整个页面都会为空。  
&emsp;&emsp;使用方法：

* 在 ```.vuepres``` 文件夹中添加 ```components``` 文件夹，这是页面访问的起始路径。
* 在文档的 ```YAML front matter``` 中添加 `layout: [自定义组件名].vue` 来将文档按照 ```.vuepress/components/[自定义组件名].vue``` 进行渲染。

&emsp;&emsp;自定义布局需要对文档数据进行渲染，可以配合[官方文档-获取渲染内容](https://www.vuepress.cn/theme/writing-a-theme.html#%E8%8E%B7%E5%8F%96%E6%B8%B2%E6%9F%93%E5%86%85%E5%AE%B9)和[官方文档-网站和页面的元数据](https://www.vuepress.cn/theme/writing-a-theme.html#%E7%BD%91%E7%AB%99%E5%92%8C%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%85%83%E6%95%B0%E6%8D%AE)使用。

### 其他插件的使用
&emsp;&emsp;可以看[官方文档](https://www.vuepress.cn/plugin/)，这里有默认主题下没有整合的插件。

## 部署到 GitHub Pages
### 配置 GitHub Pages
* 登录 github 账户，在 github 账户上创建一个用于存放发布站点的仓库。
* 在仓库的 setting 中找到 GitHub Pages 的配置项，将其中的 Source 下的下拉框选择保存打包代码的分支即可。

### 部署步骤
* 在 ```config.js``` 中设置 ```base``` 的值。

:::tip 理解 ```base```
&emsp;&emsp;```base``` 的值是部署站点的基础路径。举个例子，在 GitHub pages 中：
* 如果站点部署在根路径下，即 ```https://xxx.github.io/```，则 ```base``` 的值应设置为 ```'/'```，或者不设置，因为 ```base``` 的默认值就是 ```'/'```。
* 如果站点不再根目录下，即 ```https://xxx.github.io/blog/```，则  ```base``` 的值应设置为 ```'/blog/'```。
:::

* 使用 ```vuepress build docs``` 命令或者之前在 package.json 中配置过的 npm 命令 ```npm run build``` 进行项目打包构建。

* 使用 git 将 ```docs/.vuepress/dist``` 中打包发布好的项目 push 到 github 上创建的设置好 GitHub Pages 的仓库中，完成 GitHub Pages 的部署。

### 整合部署过程
&emsp;&emsp;在[官方文档](https://www.vuepress.cn/guide/deploy.html#github-pages)中，我们可以看到，VuePress 建议我们建立一个后缀名为 ```.sh``` 的脚本，脚本内容```见文档```内容。此处我对文档内容进行了一些修改，以下是我的脚本内容：

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build # 由于我修改了 package.json 的脚本，此处理应对应

# 进入生成的文件夹
cd docs/.vuepress/dist

# 是将 dist 中的文件提交到本地 git 管理中
git init
git add -A
git commit -m 'deploy'

# 将生成的静态文件推送到 github 的 gh-pages 分支
# gh-pages 分支作为 github pages 的展示页面
git push -f https://github.com/L-SssA/Blog.git master:gh-pages

# 回到 .sh 文件所在目录
cd -

# 将源码推送到 github 主分支
git push -f https://github.com/L-SssA/Blog.git master

```

:::warning 注意
&emsp;&emsp;在运行脚本前，需要先将源码 commit 一下，因为脚本只是做了推送，由于源码的改动 msg 应该每次提交都不同，因此无法写到脚本中，需要手动操作。
:::

&emsp;&emsp;从上述代码中可知，我在 github 上创建了一个名为 ```Blog``` 的仓库，然后在仓库中创建了两个分支，主分支用于保存源码，打包后将打包项目发布到 gh-pages 分支中，而 GitHub Pages 的配置中，我也选择了 gh-pages 分支。  
&emsp;&emsp;这样，GitHub Pages 就部署完成了。

## 结语
&emsp;&emsp;这是我初学 VuePress 的学习笔记。说实话，写了很久，而且也并不能十分透彻。目前的话，只能够部署成默认主题的样式。不仅如此，有一些实用并且是必要的插件我没有配置，因为我相信这个网站还不是它最终的样子，因此像 ```Google analytics 谷歌统计``` 等插件是没有添加的。









