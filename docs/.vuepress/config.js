const moment = require('moment');

moment.locale('zh-cn');

module.exports = {
    title: 'L-SssA 的个人博客主页',
    base: '/Blog/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '列表',
                items: [{
                        text: 'VuePress',
                        link: '/VuePress/'
                    },
                    {
                        text: 'CSS',
                        link: '/CSS/'
                    },
                ]
            }
        ],
        sidebar: 'auto',
        lastUpdated: '更新时间',
        smoothScroll: true
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'L-SssA',
            repo: 'Blog',
            clientId: '35536f68948683f7b48d',
            clientSecret: '9661f0604ded7df0382c49c76fd242b129a8f1ab',
            autoCreateIssue: true,
        },
        '@vuepress/last-updated': {
            transformer: (timestamp) => {
                return moment(timestamp).format('lll');
            }
        }
    }
}