export enum AuthActionTypes {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_ERROR = 'AUTH_ERROR',
}

interface AuthRequestAction {
  type: AuthActionTypes.AUTH_REQUEST
}

interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS
  payload: Auth
}

interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR
  payload: string
}

export type AuthAction = AuthRequestAction | AuthSuccessAction | AuthErrorAction

interface Auth {
  userId: string
  accessToken: string
}

export interface AuthState {
  readonly loading: boolean
  readonly data: Auth
  readonly error?: string
}
