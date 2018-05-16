import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actionTypes'

export const loginRequest = (credentials) => {

  console.log(credentials)

  return { type: LOGIN_REQUEST, credentials }
}

export const loginSuccess = () => ({ type: LOGIN_SUCCESS })

export const loginFail = () => ({   type: LOGIN_FAIL })
