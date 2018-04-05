import React, {Component} from 'react';
import SearchBar from '../searchBar/SearchBar'
import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'
import {Link} from 'react-router'

export default class GifsSearchEngine extends Component {

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
 

