module.exports = {
    title: 'L-SssA 的个人博客主页',
    base: '/Blog/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文章', link: '/2020/06/15/VuePress' },
            {
                text: '列表',
                items: [
                    { text: '主页', link: '/' },
                    { text: '文章', link: '/2020/06/15/VuePress' },
                ]
            }
        ],
        sidebar: 'auto'
    }
}