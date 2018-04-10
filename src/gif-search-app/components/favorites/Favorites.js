import React, {Component} from 'react'
import PropTypes from 'prop-types'
import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'
import {Link} from 'react-router'

import '../../../styles/app.css'


export default class Favorites extends Component {

  static propTypes = {
    favoriteGifIdsMap: PropTypes.object,
    selectedGif: PropTypes.object,
    modalIsOpen: PropTypes.bool,
    setFavoriteGif: PropTypes.func,
    openModal: PropTypes.func,
    closeModal: PropTypes.func
  }

  static defaultProps = {
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

  handleGifSelection = (selectedGif) => {
    const {openModal} = this.props
    if (openModal) {
      openModal(selectedGif)
    }
  }

  onCloseModal = () => {
    const {closeModal} = this.props
    if (closeModal) {
      closeModal()
    }
  }

  render() {
    const {favoriteGifIdsMap, modalIsOpen, selectedGif, setFavoriteGif} = this.props
    return (
      <div className="app">
        <div className="appTitle">My Favorites Gifs</div>
        <div className="goBack">
          <Link className='back' to='/'>Go Back</Link>
        </div>
        <GifList gifs={Array.from(favoriteGifIdsMap.values())}
                 onGifSelect={this.handleGifSelection}/>
        <GifModal modalIsOpen={modalIsOpen}
                  selectedGif={selectedGif}
                  isFavorite={this.isFavoriteGif(selectedGif, favoriteGifIdsMap)}
                  setFavoriteGif={setFavoriteGif}
                  onRequestClose={this.onCloseModal}/>
      </div>
    )
  }
}
