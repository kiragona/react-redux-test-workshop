import {setFavoriteGif} from './favoritesActions'
import test from 'tape'

test('Test SET_FAVORITE_GIF action creator', t => {
  t.plan(1)
  try {

    const expectedAction = {
      type: 'SET_FAVORITE_GIF',
      gif: {},
      isFavorite: true
    }
    const actualAction = setFavoriteGif({}, true )
    t.deepEquals(actualAction, expectedAction, 'should create SET_FAVORITE_GIF action ')

  } catch (e) {
    t.fail(e.message)
    t.end()
  }

})