import React from 'react'
import ReactDom from 'react-dom'
import AppComponent from './components/productBox.jsx'

console.log(process.env.NODE_ENV, 8877877)
if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

ReactDom.render(<AppComponent />, document.getElementById('content'));