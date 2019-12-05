import {combineReducers} from 'redux'

import configSearch from './configSearch'
import searchResult from './searchResult'
import searchMap from './searchMap'

export default combineReducers({
    configSearch: configSearch,
    searchResult: searchResult,
    searchMap: searchMap,
})