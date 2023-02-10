import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.scss'
import './assets/css/main.css'
import App from './App'
import './locales'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
		</BrowserRouter>
	</React.StrictMode>,
)
