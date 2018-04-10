export const SET_FAVORITE_GIF = 'SET_FAVORITE_GIF'

export function setFavoriteGif(gif, isFavorite) {
  return {
    type: SET_FAVORITE_GIF,
    gif: gif,
    isFavorite: isFavorite
  }
}

