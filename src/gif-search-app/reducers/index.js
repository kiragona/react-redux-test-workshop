
import { combineReducers } from 'redux'
import GifsReducer, {initialState as initialStateGifsReducer} from './gifsReducer'
import ModalReducer, { initialState as initialStateModalReducer} from './modalReducer'
import FavoritesReducer, {initialState as initialStateFavoritesReducer } from './favoritesReducer'

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

export {
  initialAppState
}

