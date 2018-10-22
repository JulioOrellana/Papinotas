import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const movies = createReducer({},{
    [types.MOVIE_LIST](state, action){
        return state
    }
})
