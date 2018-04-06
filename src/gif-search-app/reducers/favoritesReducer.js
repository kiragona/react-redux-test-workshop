import {SET_FAVORITE_GIF} from '../actions/favoritesActions'

const initialState = {
  favoriteGifIdsMap: new Map()
}

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE_GIF:

      let prevFavorites = state.favoriteGifIdsMap
      let markAsFavorite = action.isFavorite
      let newFavoritesMap

      if (markAsFavorite) {
        newFavoritesMap =  new Map(prevFavorites.set(action.gif.id, action.gif))
      } else {
        prevFavorites.delete(action.gif.id)
        newFavoritesMap =  new Map(prevFavorites)
      }

      return {
        ...state, favoriteGifIdsMap: newFavoritesMap
      }

    default:
      return state
  }
}

export {
  initialState
}