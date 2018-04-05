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


  constructor(props) {
    super(props)

    this.state = {isFavorite: false}
  }


  handleClick = () => {
    let isCurrentFavorite = this.state.isFavorite
    this.setState({
      isFavorite: !isCurrentFavorite
    })

    if (this.props.onFavoriteChange) {
      this.props.onFavoriteChange(!isCurrentFavorite)
    }
  }


  render() {

    let starClassName = (this.props.isFavorite) ? 'star-favorite' : 'star'
    return (
      <div className={starClassName} onClick={this.handleClick}></div>
    )
  }

}