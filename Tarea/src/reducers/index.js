import { combineReducers } from 'redux'
import * as Movies from './moviesReducer'

export default combineReducers(Object.assign(
    Movies,
))