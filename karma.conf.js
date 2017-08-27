const webpack = require('webpack');
const webpackConfig = require('./build/webpack.config');
const { watch } = require('./build/config');

module.exports = config => {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['./test/**/*.spec.js'],
        exclude: ['node_modules', 'dist', 'build'],
        preprocessors: {
            './test/**/*.spec.js': ['webpack']
        },
        webpack: webpackConfig,
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: watch,
        browsers: ['PhantomJS'],
        singleRun: !watch,
        concurrency: Infinity
    });
}