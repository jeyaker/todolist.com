const path = require('path');

module.exports = {
    devServer: {
        open: true,
        // proxy: { // 前端跨域--反向代理
        //     '/ajax': {
        //         target: '',
        //         changeOrigin: true
        //     }
        // },
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(__dirname, './src'))
            .set('Components', path.join(__dirname, './src/components'))
    }
};