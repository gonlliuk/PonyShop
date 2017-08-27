import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'

const render = (Component, data) => {
    ReactDom.render(
        <AppContainer>
            <Component data={data}/>
        </AppContainer>,
        document.getElementById('app')
    )
}

if (module.hot) {
    module.hot.accept('./app.jsx', (arg) => {
        const App = require('./app.jsx').default
        render(App)
    })
}

export default function(data) {
    render(App, data)
}
