/**
 * Created by bll on 2017/10/9.
 */
import { combineReducers } from 'redux'
import { ADD_TODO, TAB_ONE, SHOW_DATA } from 'actions/test.js'

function add(state = 0, action) {
	switch (action.type) {
	case ADD_TODO:
		return ++state
	default:
		return state
	}
}

function getTab(state = false, action) {
	switch (action.type) {
	case TAB_ONE:
		return !state
	default:
		return state
	}
}

function getData(state = {
	item: []
 	}, action) {
	switch (action.type) {
	case SHOW_DATA:
		return Object.assign({}, state, {
			item: action.data
		})
	default:
		return state
	}
}

const todoApp = combineReducers({
	add,
	getTab,
	getData
})

export default todoApp
