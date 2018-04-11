import favoritesReducer from './favoritesReducer'
import {setFavoriteGif} from '../actions/favoritesActions'
import test from 'tape'

import {gif1, gif2, gif3, favoritesMap} from '../../../test/mocks/dataMocks'

test('favoritesReducer: unset favorite gif', t => {

  t.plan(1)

  try {
    const expectedMap =  new Map()
    expectedMap.set(gif1.id, gif1)

    const resState = favoritesReducer({favoriteGifIdsMap: favoritesMap}, setFavoriteGif(gif2, false))
    t.deepEqual({favoriteGifIdsMap: expectedMap}, resState, 'unset favorite gif works properly')

  }catch (e) {
    t.fail(e.message)

  }
})

test('favoritesReducer: add favorite gif', t => {

  t.plan(1)

  try {

    const expectedMap =  new Map()
    expectedMap.set(gif1.id, gif1)
    expectedMap.set(gif2.id, gif2)
    expectedMap.set(gif3.id, gif3)

    const resState = favoritesReducer({favoriteGifIdsMap: favoritesMap}, setFavoriteGif(gif3, true))
    t.deepEqual({favoriteGifIdsMap: expectedMap}, resState, 'add favorite gif works properly')

  }catch (e) {
    t.fail(e.message)

  }
})