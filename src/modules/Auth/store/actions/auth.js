import { AC_LOGIN_REQUEST, AC_LOGIN_SUCCESS, AC_LOGIN_FAIL } from '../actionTypes'

export const loginRequest = (credentials) => {
  return { type: AC_LOGIN_REQUEST, credentials }
}

export const loginSuccess = () => ({ type: AC_LOGIN_SUCCESS })

export const loginFail = () => ({   type: AC_LOGIN_FAIL })
