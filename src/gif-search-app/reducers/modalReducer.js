import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modalActions'

const initialState = {
  gif: null,
  modalIsOpen: false
}

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        gif: action.gif
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        gif: null
      };
    default:
      return state
  }
}

export {
  initialState
}

