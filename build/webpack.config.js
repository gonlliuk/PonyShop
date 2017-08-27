const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { debug, dist, entry, resolve, template, test } = require('./config')

const options = {
    entry,
    output: {
        path: dist,
        publicPath: '/'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx', '.styl'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/, /dist/],
            use: ['react-hot-loader/webpack', 'babel-loader']
        }, {
            test: /\.styl$/,
            exclude: [/node_modules/, /dist/],
            use: ['style-loader', 'css-loader', 'stylus-loader']
        },{
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            exclude: [/node_modules/, /dist/],
            use : ['file-loader']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                GOOGLE_KEY: JSON.stringify(process.env.GOOGLE_KEY),
                GOOGLE_SENDER: JSON.stringify(process.env.GOOGLE_SENDER),
            },
        }),
        new HtmlWebpackPlugin({
            template,
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([{
            from: resolve('src/assets'),
            to: './'
        }])
    ]
}

module.exports = test ?
    merge(options, require('./webpack.test')) : debug ?
        merge(options, require('./webpack.dev')) :
        merge(options, require('./webpack.dist'))