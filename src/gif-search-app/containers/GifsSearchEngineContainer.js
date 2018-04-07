import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as GifsActions from '../actions/gifsActions'
import * as ModalActions from '../actions/modalActions'
import * as FavoritesActions from '../actions/favoritesActions'

import GifsSearchEngine from '../components/gifsSearchEngine/GifsSearchEngine'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, GifsActions, ModalActions, FavoritesActions), dispatch)
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif,
    favoriteGifIdsMap: state.favorites.favoriteGifIdsMap

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GifsSearchEngine)

 

