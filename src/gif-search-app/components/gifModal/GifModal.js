import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import FavoriteStar from './../favorites/FavoriteStar'

export default class GifModal extends React.Component {

  static propTypes = {
    selectedGif: PropTypes.object,
    isFavorite: PropTypes.bool,
    setFavoriteGif: PropTypes.func,
    onRequestClose: PropTypes.func,
    modalIsOpen: PropTypes.bool
  }

  handleFavorites = (isFavorite) => {

    if (this.props.setFavoriteGif) {
      this.props.setFavoriteGif(this.props.selectedGif, isFavorite)
    }
  }

  handleCloseModal = () => {
    if (this.props.onRequestClose) {
      this.props.onRequestClose()
    }
  }

  render() {

    const {selectedGif, modalIsOpen, isFavorite} = this.props

    if (!selectedGif) {
      return <div/>
    }
    return (
      <Modal contentLabel='myLabel'
             className='gif-modal'
             overlayClassName='modal-overlay'
             isOpen={modalIsOpen}
             onRequestClose={this.handleCloseModal}>
        <div>
          <FavoriteStar isFavorite={isFavorite} onFavoriteChange={this.handleFavorites}/>
          <p><strong>Details</strong></p>
          <img alt='' src={selectedGif.images.original.url}/>
          <p><strong>Source:</strong> <a href={selectedGif.source}>{selectedGif.source}</a></p>
          <p><strong>Rating:</strong> {selectedGif.rating}</p>
          <button onClick={this.handleCloseModal}>close</button>
        </div>
      </Modal>
    )
  }


}