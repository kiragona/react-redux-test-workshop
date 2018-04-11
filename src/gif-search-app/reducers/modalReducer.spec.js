import modalReducer from './modalReducer'
import {openModal, closeModal, OPEN_MODAL} from '../actions/modalActions'
import {initialState} from './modalReducer'
import test from 'tape'

import {gif1} from '../../../test/mocks/dataMocks'

test('modalReducer: openModal', t => {

  t.plan(1)

  try {
    const expectedState =  {gif: gif1, modalIsOpen: true}

    const resState = modalReducer(initialState, openModal(gif1, true))
    t.deepEqual(expectedState, resState, 'OPEN_MODAL works properly')

  }catch (e) {
    t.fail(e.message)

  }
})

test('modalReducer: closeModal', t => {

  t.plan(1)

  try {
    const expectedState =  {gif: null, modalIsOpen: false}
    const resState = modalReducer({...initialState, modalIsOpen: true, gif: gif1}, closeModal())
    t.deepEqual(expectedState, resState, 'OPEN_MODAL works properly')

  }catch (e) {
    t.fail(e.message)

  }
})