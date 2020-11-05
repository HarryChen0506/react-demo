import { LOAD_USER_DATA } from '../constants'

export const loadUserData = (payload = {}) => {
  return {
    type: LOAD_USER_DATA,
    payload
  }
}