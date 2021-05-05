const path = require('path');

module.exports = {
    distDir: 'dist',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    compress: true,
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
}