import React,{ Component } from 'react'
import { render } from 'react-dom'
import manager from '../../assets/img/manager.png'
import '../../assets/css/test.css'

export default class ProductBox extends Component {
    constructor(props) {
      super(props)
    }

	render() {
		return (
            <div className="productBox">
              Hello World!asdas
				<img src={manager} alt=""/>
            </div>
		);
	}
}