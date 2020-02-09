// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:8081",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api/v1',

                },
                cookieDomainRewrite: {
                    "*": "/"
                }
            },
            '/auth': {
                target: "http://localhost:8081",
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/auth': '/auth/login'
                },
                cookieDomainRewrite: {
                    "*": "/"
                }
            }
        }
    }
}