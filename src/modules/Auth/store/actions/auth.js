import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actionTypes'

export const loginRequest = () => ({ type: LOGIN_REQUEST })

export const loginSuccess = (data) => ({ type: LOGIN_SUCCESS,   data })

export const loginFail = () => ({   type: LOGIN_FAIL })
