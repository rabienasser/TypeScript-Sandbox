import {combineReducers} from 'redux'
import weatherReducer from './weatherReducer'
import alertReducer from './alertReducer'

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer
})

export default rootReducer