import {closeModal, openModal} from './modalActions'
import test from 'tape'

test('Test CLOSE_MODAL action creator', t => {
  t.plan(1)
  try {

    const expectedAction = {
      type: 'CLOSE_MODAL'
    }
    const actualAction = closeModal()
    t.deepEquals(actualAction, expectedAction, 'should create CLOSE_MODAL action ')

  } catch (e) {
    t.fail(e.message)
    t.end()
  }

})

test('Test OPEN_MODAL action creator', t => {
  t.plan(1)
  try {

    const expectedAction = {
      type: 'OPEN_MODAL',
      gif: {}
    }
    const actualAction = openModal({})
    t.deepEquals(actualAction, expectedAction, 'should create OPEN_MODAL action ')

  } catch (e) {
    t.fail(e.message)
    t.end()
  }

})