import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import _ from 'lodash'

export const favoriteCharacters = createReducer([],{
    [types.FAVORITE_CHAR](state, action){

        //If characterId exists
        if(action.characterId){

            let newState = [...state]
            
            // If the Id exists in state
            if(newState.includes(action.characterId)){

                // Look for the index in state
                let index = newState.indexOf(action.characterId);
                newState.splice(index,1)
                return newState
            }else{

                newState.push(action.characterId)
                return newState
            }
        }else{
            return state
        }
    }
})

export const charList = createReducer([],{
    [types.CHAR_LIST](state, action){

        return action.list
    }
})
