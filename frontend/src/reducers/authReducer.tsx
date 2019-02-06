import { logInConstants } from '../actions/types'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : {}

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
    case logInConstants.SEND_JSON:
      return {
        sendingJSON: true,
      }
    case logInConstants.RECEIVE_JSON:
      return {
        receivingJSON: true,
      }
    case logInConstants.SEND_REQUEST:
      return {
        sendingRequest: true,
      }
    case logInConstants.RECEIVE_REQUEST:
      return {
        receivingRequest: true,
      }
    default:
      return state
  }
}
