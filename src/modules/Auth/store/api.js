import axios from 'axios'

import { API_BASE_URL, API_TIMEOUT } from '../../../config/api'

export const AUTH = 'auth/' // BASE
export const AUTH_LOGIN = AUTH+'login' // POST
export const AUTH_REFRESH = AUTH+'refresh' // POST
export const AUTH_LOGOUT = AUTH+'logout' // POST

export default axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT
})
