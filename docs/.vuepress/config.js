const moment = require('moment');

moment.locale('zh-cn');

module.exports = {
    title: 'L-SssA 的个人博客主页',
    base: '/Blog/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文章', link: '/Vuepress/Vuepress的快速构建与部署' },
            {
                text: '列表',
                items: [{
                        text: '主页',
                        link: '/'
                    },
                    {
                        text: '文章',
                        link: '/VuePress/Vuepress的快速构建与部署'
                    },
                ]
            }
        ],
        sidebar: 'auto',
        lastUpdated: '更新时间',
        smoothScroll: true
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format('lll');
                }
            }
        ]
    ]
}