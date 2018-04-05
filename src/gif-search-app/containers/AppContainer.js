import React, {Component} from 'react'
import SearchBar from '../components/searchBar/SearchBar'
import GifList from '../components/gifList/GifList'
import GifModal from '../components/gifModal/GifModal'
import {Link} from 'react-router'

import {bindActionCreators} from 'redux'
import * as Actions from '../actions'

import {connect} from 'react-redux'

import '../../styles/app.css'

class App extends Component {

  isFavoriteGif = () => {
    if (!this.props.selectedGif) {
      return false
    }

    return (this.props.favoriteGifIdsMap.get(this.props.selectedGif.id) !== undefined)
  }

  render() {

    return (
      <div className="app">
        <div className="appTitle">Gifs Search Engine</div>
        <div className="searchFavoritesHolder">
          <SearchBar onTermChange={this.props.actions.requestGifs}/>
          <div className="favoriteLinkHolder">
            <Link to='/favorites'>Show Favorites</Link>
          </div>
        </div>
        <GifList gifs={this.props.gifs} onGifSelect={selectedGif => this.props.actions.openModal({selectedGif})}/>
        <GifModal modalIsOpen={this.props.modalIsOpen}
                  selectedGif={this.props.selectedGif}
                  isFavorite={this.isFavoriteGif()}
                  setFavoriteGif={this.props.actions.setFavoriteGif}
                  onRequestClose={() => this.props.actions.closeModal()}/>
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(App)






