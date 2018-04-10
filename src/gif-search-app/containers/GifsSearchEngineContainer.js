import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {requestGifs} from '../actions/gifsActions'
import {setFavoriteGif} from '../actions/favoritesActions'
import {closeModal, openModal} from '../actions/modalActions'
import GifsSearchEngine from '../components/gifsSearchEngine/GifsSearchEngine'

function mapDispatchToProps(dispatch) {
  return {
    requestGifs: bindActionCreators(requestGifs, dispatch),
    setFavoriteGif: bindActionCreators(setFavoriteGif, dispatch),
    closeModal: bindActionCreators(closeModal, dispatch),
    openModal: bindActionCreators(openModal, dispatch),

  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.gif,
    favoriteGifIdsMap: state.favorites.favoriteGifIdsMap

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GifsSearchEngine)

 

