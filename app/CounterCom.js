/**
 * Created by bll on 2017/10/9.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'actions/test.js'

class Counter extends Component {
	render() {
		const { dispatch, count } = this.props

		return (
			<div>
				<button onClick={() => dispatch(addTodo())}> 点击 + {count}</button>
			</div>
		)
	}
}
function selectTodos(todos) {
	return todos
}

function select(state) {
	console.log(state, 999)
	return {
		count: selectTodos(state.add)
	}
}
export default connect(select)(Counter)
