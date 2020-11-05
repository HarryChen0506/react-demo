import { LOAD_USER_DATA, CLEAR_USER_DATA } from '../constants'

const initialState = {
  name: '',
  age: 0
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case CLEAR_USER_DATA:
      return {
        ...initialState
      }
    default:
      return state
  }
}
