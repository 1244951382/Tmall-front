const {
    defineConfig
} = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    devServer: {
        host: 'localhost',
        port: 8081, //配置前台启动端口
        proxy: {
            '/api': {
                target: 'http://localhost:9001',
                ws: true,
                changeOrigin: true, //开启跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                jquery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
})
