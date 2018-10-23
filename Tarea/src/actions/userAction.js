import * as types from './types'

export function setFavoriteCharacters(characterId) {
    return {
        type: types.FAVORITE_CHAR,
        characterId
    }
}