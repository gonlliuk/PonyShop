const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const { watch } = require('./config')

module.exports = {
    watch,
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?noInfo=true&reload=false',
        'webpack/hot/only-dev-server'
    ],
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'eslint-loader',
            enforce: "pre",
            exclude: /(node_modules)/,
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        }]
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
}