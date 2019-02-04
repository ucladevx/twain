import { logInConstants } from '../actions/types'

let user = JSON.parse(localStorage.getItem('user'))
const initalState = user ? { loggedIn: true, user } : {}

export function authenticate(state = initialState, action) {
  switch (action.type) {
    case logInConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      }
    case logInConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      }
    case logInConstants.LOGIN_ERROR:
      return {}
    default:
      return state
  }
}
