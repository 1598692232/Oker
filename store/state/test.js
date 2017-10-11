/**
 * Created by bll on 2017/10/11.
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from 'reducer/test'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
	loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
	return createStoreWithMiddleware(rootReducer, initialState)
}