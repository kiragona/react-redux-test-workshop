import React, {Component} from 'react'

class GifItem extends Component {


  render() {

    const {onGifSelect, gif} = this.props
    return (
      <div className="gif-item"
           onClick={() => {
             onGifSelect(gif)
           }}>
        <img alt='' src={gif.images.downsized.url}/>
      </div>
    )
  }
}

export default GifItem
