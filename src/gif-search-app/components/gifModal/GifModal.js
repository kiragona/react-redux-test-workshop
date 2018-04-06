import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import FavoriteStar from './../favorites/FavoriteStar'


export default class GifModal extends React.Component {

  static propTypes = {
    selectedGif: PropTypes.object,
    isFavorite: PropTypes.bool,
    setFavoriteGif: PropTypes.func
  }

  handleFavorites = (isFavorite) => {
    if (this.props.setFavoriteGif) {
      this.props.setFavoriteGif(this.props.selectedGif, isFavorite)
    }
  }

  render() {
    if (!this.props.selectedGif) {
      return <div/>
    }


    return (
      <Modal contentLabel='myLabel' className='gif-modal' overlayClassName='modal-overlay'
             isOpen={this.props.modalIsOpen}
             onRequestClose={() => this.props.onRequestClose()}>
        <div>
          <FavoriteStar isFavorite={this.props.isFavorite} onFavoriteChange={this.handleFavorites}/>
          <p><strong>Details</strong></p>
          <img alt='' src={this.props.selectedGif.images.original.url}/>
          <p><strong>Source:</strong> <a href={this.props.selectedGif.source}>{this.props.selectedGif.source}</a></p>
          <p><strong>Rating:</strong> {this.props.selectedGif.rating}</p>
          <button onClick={() => this.props.onRequestClose()}>close</button>
        </div>
      </Modal>
    )
  }


}