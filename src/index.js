import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/main.css'
import './assets/css/index.scss'
import App from './App'
import './locales'
import { BrowserRouter } from 'react-router-dom'

const config = require('http://localhost:3000/config/config.js') // eslint-disable-line global-require
config.then(res => {
	window.myconfig = res.default
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
)
