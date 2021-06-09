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
            sw: 'service-worker.js',
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
    async headers() {
        return [
          {
            // matching all API routes
            source: "/v1/(.*)",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
    }
}