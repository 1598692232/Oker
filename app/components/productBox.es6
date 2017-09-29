import React, { Component } from 'react'
import { render } from 'react-dom'
import manager from 'img/manager.png'
import 'css/test.css'

export default class ProductBox extends Component {
	constructor(props) {
      	super(props)
	}

	render() {
		return (
			<div className="productBox">
				Hello World!asdas
				<img src={manager} alt="" />
			</div>
		)
	}
}