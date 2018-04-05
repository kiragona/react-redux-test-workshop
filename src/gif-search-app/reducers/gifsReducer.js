import {RECEIVE_GIFS} from '../actions'

const initialState = {
  data: []
}

export default function gifsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_GIFS:
      return {
        ...state, data: action.payload
      }


    default:
      return state
  }
}

export {
  initialState
}
