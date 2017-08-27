import 'babel-polyfill'
import 'react-hot-loader/patch'
import generateData from './libs/generateData'
import App from './apps/App'
import '../stylus/main.styl'

// Generate data for app
const data = generateData()

App(data)