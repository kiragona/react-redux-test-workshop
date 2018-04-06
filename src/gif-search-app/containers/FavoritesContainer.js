import {connect} from 'react-redux'
import {bindActionCreators} from 'redux/index'
import * as GifsActions from '../actions/gifsActions'
import * as FavoritesActions from '../actions/favoritesActions'
import * as ModalActions from '../actions/modalActions'

import Favorites from '../components/favorites/Favorites'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object,assign({}, GifsActions, FavoritesActions, ModalActions), dispatch)
  }
}

function mapStateToProps(state) {
  return {
    favoriteGifIdsMap: state.favorites.favoriteGifIdsMap,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif,

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
