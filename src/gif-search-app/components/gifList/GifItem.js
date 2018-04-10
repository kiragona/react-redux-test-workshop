import React, {Component} from 'react'
import PropTypes from 'prop-types'

class GifItem extends Component {

  static propTypes = {
    gif: PropTypes.object.isRequired, // better to define shape
    onGifSelect: PropTypes.func
  }

  selectGif = () => {
    const {onGifSelect, gif} = this.props
    if (onGifSelect) {
      onGifSelect(gif)
    }
  }

  render() {

    const {gif} = this.props
    // note: this is a very naive validation
    if (!gif || typeof gif !== 'object') {
      return (
        <div className="gif-item"/>
      )
    }

    return (
      <div className="gif-item" onClick={this.selectGif}>
        <img className='gif-img'
             alt=''
             src={gif.images.downsized.url}/>
      </div>
    )
  }
}

export default GifItem
