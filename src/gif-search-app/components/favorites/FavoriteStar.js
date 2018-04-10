import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class FavoriteStar extends Component {

  static propTypes = {
    isFavorite: PropTypes.bool,
    onFavoriteChange: PropTypes.func
  }

  static defaultProps = {
    isFavorite: false
  }

  handleClick = () => {
    if (this.props.onFavoriteChange) {
      this.props.onFavoriteChange(!this.props.isFavorite)
    }
  }

  render() {
    let starClassName = (this.props.isFavorite) ? 'star-favorite' : 'star'
    return (
      <div className={starClassName} onClick={this.handleClick}/>
    )
  }
}


