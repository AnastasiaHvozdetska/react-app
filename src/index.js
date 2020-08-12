import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/index'
import StorePriveder from './provider'

import './index.css'

ReactDOM.render(
	<StorePriveder>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StorePriveder>,
	document.getElementById('root'),
)
