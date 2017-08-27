const path = require('path')

/** application environments */
const debug = process.env.NODE_ENV !== 'production'
const test = process.env.NODE_ENV === 'test'
const watch = process.env.NODE_WATCH === 'true'

/** path resolver */
const resolve = dir => path.resolve(__dirname, '..', dir)

/** dist output */
const dist = resolve('dist')

/** main template */
const template = resolve('src/html/index.html')

/** main entry */
const entry = [resolve('src/js/bootstrap.js')]

module.exports = { debug, dist, entry, resolve, template, test, watch }