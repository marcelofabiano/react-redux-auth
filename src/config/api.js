import axios from 'axios'

export const API_VERSION = 'v1'
export const API_TIMEOUT = 4000

export const API_BASE_URL = 'http://localhost:8000/api/'
export const API_ENDPOINT = VERSION+'/'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT
})

export default api
