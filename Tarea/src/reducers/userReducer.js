import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const favoriteCharacters = createReducer({},{
    [types.FAVORITE_CHAR](state, action){
        return state
    }
})
