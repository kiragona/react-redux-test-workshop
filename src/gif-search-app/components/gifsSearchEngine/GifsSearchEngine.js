import React, {Component} from 'react';
import SearchBar from '../searchBar/SearchBar'
import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

export default class GifsSearchEngine extends Component {

  static propTypes = {
    requestGifs: PropTypes.func,
    setFavoriteGif: PropTypes.func,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    gifs: PropTypes.arrayOf(PropTypes.object),
    modalIsOpen: PropTypes.bool,
    selectedGif: PropTypes.object,
    favoriteGifIdsMap: PropTypes.object
  }


  static defaultProps = {
    gifs: [],
    modalIsOpen: false,
    selectedGif: null,
    favoriteGifIdsMap: new Map()
  }

  isFavoriteGif = (selectedGif, favoritesMap) => {
    if (!selectedGif || !favoritesMap) {
      return false
    }

    return (favoritesMap.get(selectedGif.id) !== undefined)
  }

  onCloseModal = () => {
    const {closeModal} = this.props
    if (closeModal) {
      closeModal()
    }
  }

  handleGifSelection = (selectedGif) => {
    const {openModal} = this.props
    if (openModal) {
      openModal(selectedGif)
    }
  }

  render() {
    const {favoriteGifIdsMap, modalIsOpen, selectedGif, setFavoriteGif, requestGifs} = this.props

    return (
      <div className="app">
        <div className="appTitle">Gifs Search Engine</div>
        <div className="searchFavoritesHolder">
          <SearchBar onTermChange={requestGifs}/>
          <div className="favoriteLinkHolder">
            <Link className='showFavorites' to='/favorites'>Show Favorites</Link>
          </div>
        </div>
        <GifList gifs={this.props.gifs} onGifSelect={this.handleGifSelection}/>
        <GifModal modalIsOpen={modalIsOpen}
                  selectedGif={selectedGif}
                  isFavorite={this.isFavoriteGif(selectedGif, favoriteGifIdsMap)}
                  setFavoriteGif={setFavoriteGif}
                  onRequestClose={this.onCloseModal}/>
      </div>
    )
  }
}
 

