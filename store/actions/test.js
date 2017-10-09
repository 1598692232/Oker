/**
 * Created by bll on 2017/10/9.
 */
export const ADD_TODO = 'ADD_TODO'
export const SHOW_TAB = 'SHOW_TAB'
export const TAB_ONE = 'TAB_ONE'

export function addTodo() {
	return { type: ADD_TODO }
}

export function showTabOne() {
	return { type: TAB_ONE }
}