const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = {
    distDir: 'dist',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    compress: true,
    withPWA: {
        pwa: {
            dest: 'public',
            runtimeCaching,
        }
    },
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
}