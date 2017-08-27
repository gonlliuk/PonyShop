const webpack = require('webpack')
const { watch } = require('./config')

module.exports = {
    watch,
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'eslint-loader',
            enforce: "pre",
            exclude: /(node_modules)/
        }]
    }
}