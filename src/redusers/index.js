import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'


import configSearch from './configSearch'
import searchResult from './searchResult'
import oneRoom from './oneRoom'
import searchMap from './searchMap'
import user from './user'
import fileInput from './fileInput'
import app from './app'

export default combineReducers({
    app: app,
    fileInput: fileInput,
    configSearch: configSearch,
    searchResult: searchResult,
    searchMap: searchMap,
    oneRoom: oneRoom,
    user: user,
    form: formReducer
})