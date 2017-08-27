const express = require('express')
const logger = require('morgan')
const path = require('path')
const http = require('http')

const { dist } = require('./build/config')

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 5000

app.use(logger('dev'))
app.use(express.static(dist))
app.use('/*', function(req, res) {
    res.sendFile(path.join(dist, 'index.html'))
})

server.listen(port)
