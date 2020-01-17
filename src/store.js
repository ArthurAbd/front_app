import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import redusers from './redusers/index'

const store = createStore(redusers, applyMiddleware(thunkMiddleware))

export default store