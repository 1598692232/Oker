/**
 * Created by bll on 2017/10/9.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, showTabOne, fetchPosts } from 'actions/test.js'

class Counter extends Component {
 	renderFilter(name) {
		const { dispatch, show } = this.props
		if (show) {
			console.log(show, 8888)
			return name
		}

		return (
			<a href="#" onClick={e => {
				e.preventDefault()
				dispatch(showTabOne())
			}}
			>
				{name}
			</a>
		)
	}



	render() {
		const { dispatch, count, data } = this.props
		let list = []
		for (var i in data.item ) {
			list.push(
				data.item[i]
			)
		}
		return (
			<div>
				<button onClick={() => dispatch(addTodo())}> 点击 + {count}</button>
				<p>
					Show:
					{' '}
					{this.renderFilter('tab1')}
					.
				</p>
				<button onClick={() => dispatch(fetchPosts('reactjs'))}>获取数据</button>
				<ul>
					{list.map((v) =>
						<li key={v}>{v}</li>
					)}
				</ul>

			</div>
		)
	}
}


function select(state) {
	console.log(state, 999)
	return {
		count: state.add,
		show: state.getTab,
		data: state.getData
	}
}
export default connect(select)(Counter)
