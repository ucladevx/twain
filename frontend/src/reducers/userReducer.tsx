import { logInConstants } from '../actions/types'

export function users(state = {}, action) {
  switch (action.type) {
    case logInConstants.LOGIN_REQUEST:
      return {
        loading: true,
      }
    case logInConstants.LOGIN_SUCCESS:
      return {}
    case logInConstants.LOGIN_ERROR:
      return {
        error: action.error,
      }
    default:
      return state
  }
}
