/* eslint-disable */
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import fetch from 'cross-fetch'
import { AUTH_SUCCESS, AUTH_ERROR } from './types'
import { ApplicationState } from '..'

export const onAuthSuccess = (
  id_token: string,
  auth_code: string
): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
> => async dispatch => {
  const data = { id_token, auth_code }
  await fetch('localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  dispatch(receiveAuthSuccess())
}

export const onAuthFailure = (
  error: string
): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
> => async dispatch => {
  dispatch(receiveAuthFailure(error))
}

function receiveAuthSuccess() {
  return {
    type: AUTH_SUCCESS,
  }
}

function receiveAuthFailure(error: string) {
  return {
    type: AUTH_ERROR,
    payload: error,
  }
}
