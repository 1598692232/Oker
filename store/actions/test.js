/**
 * Created by bll on 2017/10/9.
 */
import fetch from 'isomorphic-fetch'

export const ADD_TODO = 'ADD_TODO'
export const SHOW_TAB = 'SHOW_TAB'
export const TAB_ONE = 'TAB_ONE'
export const SHOW_DATA = 'SHOW_DATA'

export function addTodo() {
	return { type: ADD_TODO }
}

export function showTabOne() {
	return { type: TAB_ONE }
}

function showData(json) {
	console.log(json, 77777)
	return {
		type: SHOW_DATA,
		data: json
	}
}

export function fetchPosts() {
	return dispatch => {
		return fetch('http://api.yunspace.com.cn/api/tags/all_tags.json')
			.then(response => response.json())
			.then(json => {
				console.log(json, 888)
				dispatch(showData(json.activity_type))
			})
	}
}
