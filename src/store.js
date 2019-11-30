import {createStore} from 'redux'

import reduser from './redusers/index'

const store = createStore(reduser)

export default store