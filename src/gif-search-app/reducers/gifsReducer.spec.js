import gifsReducer, {initialState} from './gifsReducer'
import {receiveGifs} from '../actions/gifsActions'

import test from 'tape'

test('gifsReducer : receiveGifs', t => {
  t.plan(1)

  try {

    const expectedState = {data: [1, 2, 3]}

    const resState = gifsReducer(initialState, receiveGifs([1, 2, 3]))

    t.deepEqual(expectedState, resState, 'state was updated correctly')

  } catch (error) {
    t.fail(error.message)
  }
})