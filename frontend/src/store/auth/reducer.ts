import { Reducer } from 'redux'
import { AuthState, AUTH_SUCCESS, AUTH_ERROR, AuthAction } from './types'

const initialState: AuthState = {
  data: null,
  error: undefined,
  loading: false,
}

const authReducer: Reducer<AuthState> = (
  state = initialState,
  action: AuthAction
) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
