import React, {Component} from 'react'

import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'


import {Link} from 'react-router'

import '../../../styles/app.css'


export default class Favorites extends Component {

  isFavoriteGif = () => {
    if (!this.props.selectedGif) {
      return false
    }

    return (this.props.favoriteGifIdsMap.get(this.props.selectedGif.id) !== undefined)
  }

  render() {
    return (
      <div className="app">
        <div className="appTitle">My Favorites Gifs</div>
        <div className="goBack">
          <Link to='/'>Go Back</Link>
        </div>
        <GifList gifs={Array.from(this.props.favoriteGifIdsMap.values())}
                 onGifSelect={selectedGif => this.props.actions.openModal({selectedGif})}/>
        <GifModal modalIsOpen={this.props.modalIsOpen}
                  selectedGif={this.props.selectedGif}
                  isFavorite={this.isFavoriteGif()}
                  setFavoriteGif={this.props.actions.setFavoriteGif}
                  onRequestClose={() => this.props.actions.closeModal()}/>
      </div>
    )
  }
}
