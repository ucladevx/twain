import { combineReducers } from 'redux'
import { AuthState } from './auth/types'
import authReducer from './auth/reducer'

export interface ApplicationState {
  auth: AuthState
}

export const rootReducer = combineReducers<ApplicationState>({
  auth: authReducer,
})
