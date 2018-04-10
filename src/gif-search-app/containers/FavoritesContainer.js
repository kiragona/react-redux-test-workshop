import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setFavoriteGif} from '../actions/favoritesActions'
import {closeModal, openModal} from '../actions/modalActions'
import Favorites from '../components/favorites/Favorites'

function mapDispatchToProps(dispatch) {
  return {
    setFavoriteGif: bindActionCreators(setFavoriteGif, dispatch),
    closeModal: bindActionCreators(closeModal, dispatch),
    openModal: bindActionCreators(openModal, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    favoriteGifIdsMap: state.favorites.favoriteGifIdsMap,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.gif
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
