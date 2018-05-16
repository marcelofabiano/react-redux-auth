import axios from 'axios'

import { BASE_URL, TIMEOUT } from '../../../config/api'

export const AUTH = 'auth/' // BASE
export const AUTH_LOGIN = AUTH+'login' // POST
export const AUTH_REFRESH = AUTH+'refresh' // POST
export const AUTH_LOGOUT = AUTH+'logout' // POST

export default axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
