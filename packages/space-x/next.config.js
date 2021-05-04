const path = require('path');

module.exports = {
    distDir: 'dist',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
}