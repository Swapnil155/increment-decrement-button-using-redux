import {combineReducers} from 'redux'

import counterReducer from './counter'
import loggedReducer from './isLogged'

const allReducer = combineReducers({
    counter : counterReducer,
    isLogged : loggedReducer
})

export default allReducer;