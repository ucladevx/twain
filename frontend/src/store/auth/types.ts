export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'

interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS
}

interface AuthErrorAction {
  type: typeof AUTH_ERROR
  payload: string
}

export type AuthAction = AuthSuccessAction | AuthErrorAction

interface Auth {
  id_token: string
  auth_code: string
}

export interface AuthState {
  readonly loading: boolean
  readonly data: Auth
  readonly error?: string
}
