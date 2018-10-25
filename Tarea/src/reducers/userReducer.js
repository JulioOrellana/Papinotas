import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import _ from 'lodash'
import store from '../lib/store'

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

        if(action.list)
            return action.list
        else
            return state
    }
})

export const filteredList = createReducer( [] ,{
    [types.SEARCH_CHAR_LIST](state, action){
        
        if(action.text){
            const list = action.list
            try{
                const fileteredList = _.filter(list, person => new RegExp(action.text).test(person.name.toLowerCase()) );
                return fileteredList
            }catch(e){
                return []
            }
        }else{
            return []
        }
    }
})