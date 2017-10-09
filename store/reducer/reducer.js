/**
 * Created by bll on 2017/10/9.
 */
// import { combineReducers } from 'redux'
// import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from 'actions/actions.js'
// const { SHOW_ALL } = VisibilityFilters
//
// function visibilityFilter(state = SHOW_ALL, action) {
// 	switch (action.type) {
// 		case SET_VISIBILITY_FILTER:
// 			console.log(state,action, 666)
// 			return action.filter
// 		default:
// 			return state
// 	}
// }
//
// function todos(state = [], action) {
// 	switch (action.type) {
// 		case ADD_TODO:
// 			return [
// 				...state,
// 				{
// 					text: action.text,
// 					completed: false
// 				}
// 			]
// 		case COMPLETE_TODO:
// 			console.log(action,...state.slice(0, action.index))
// 			return [
// 				...state.slice(0, action.index),
// 				Object.assign({}, state[action.index], {
// 					completed: true
// 				}),
// 				...state.slice(action.index + 1)
// 			]
// 		default:
// 			return state
// 	}
// }
//
// const todoApp = combineReducers({
// 	visibilityFilter,
// 	todos
// })
//
// export default todoApp