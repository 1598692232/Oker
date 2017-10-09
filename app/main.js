

// import ReactDOM from 'react-dom'
// import React from 'react'
// import { Component } from 'react'
// import { Provider } from 'react-redux'
// import AppComponent from './components/productBox.es6'
//
// console.log(process.env.NODE_ENV, 8877877)
// if (process.env.NODE_ENV !== 'production') {
// 	console.log('Looks like we are in development mode!')
// }
//
// ReactDOM.render(
// 	<Provider store={store}>
// 		<AppComponent />
// 	</Provider>,
// 	document.getElementById('content')
// )

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './CounterCom'
import todoApp from 'reducer/test.js'
// import App from './components/App'
// import todoApp from 'reducer/reducer.js'


let store = createStore(todoApp)

let rootElement = document.getElementById('root')
render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
)
