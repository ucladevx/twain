import { Reducer } from 'redux'
import { AuthState, AuthActionTypes, AuthAction } from './types'

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
    case AuthActionTypes.AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case AuthActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case AuthActionTypes.AUTH_ERROR:
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
