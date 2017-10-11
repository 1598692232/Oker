import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/CounterCom'

import configureStore from 'state/test'

const store = configureStore()

let rootElement = document.getElementById('content')
render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
)
