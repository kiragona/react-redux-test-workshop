import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'

import GifsSearchEngine from '../components/gifsSearchEngine/GifsSearchEngine'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
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

 

