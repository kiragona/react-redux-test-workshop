
import { combineReducers } from 'redux'
import GifsReducer, {initialState as initialStateGifsReducer} from '../reducers/gifsReducer'
import ModalReducer, { initialState as initialStateModalReducer} from '../reducers/modalReducer'
import FavoritesReducer, {initialState as initialStateFavoritesReducer } from '../reducers/favoritesReducer'

import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer,
  favorites: FavoritesReducer,
  routing: routerReducer
})

export default rootReducer


const initialAppState = {
  gifs: initialStateGifsReducer,
  modal: initialStateModalReducer,
  favorites: initialStateFavoritesReducer
}


const createInitialAppState = (gifsList, favoritesGifs) => {
  return {
    gifs: gifsList ? {...initialStateGifsReducer, data: gifsList}  : initialStateGifsReducer,
    modal: initialStateModalReducer,
    favorites: favoritesGifs ? {...initialStateFavoritesReducer, favoriteGifIdsMap:  favoritesGifs} : initialStateFavoritesReducer
  }
}

export {
  initialAppState,
  createInitialAppState
}

