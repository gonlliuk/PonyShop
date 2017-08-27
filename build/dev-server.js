const express = require('express')
const webpack = require('webpack')
const path = require('path')
const http = require('http')

const { dist } = require('./config')

/** webpack comiler */
const config = require('./webpack.config')
const compiler = webpack(config)

/** express instance */
const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 5000

/** compiler middleware */
const devMiddleware = require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
    quiet: true
})

/** HRM middleware */
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

app.use(devMiddleware)
app.use(hotMiddleware)

/** static folder */
app.use(express.static(dist))

/** request resolver */
app.use('/*', function(req, res) {
    res.sendFile(path.join(dist, 'index.html'))
})

/** server listener */
server.listen(port)