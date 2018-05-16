import axios from 'axios'

import { API_ENDPOINT, API_BASE_URL, API_TIMEOUT } from '../../../config/api'

export const EP_COMPANIES = API_ENDPOINT+'companies' // GET
export const EP_COMPANY = API_ENDPOINT+'companies/{id}' // GET
export const EP_COMPANY_CREATE = API_ENDPOINT+'companies' // POST
export const EP_COMPANY_UPDATE = API_ENDPOINT+'companies/{id]' // PUT
export const EP_COMPANY_ARCHIVE = API_ENDPOINT+'companies/{id}/archive' // PUT
export const EP_COMPANY_DESTROY = API_ENDPOINT+'companies/{id}' // DELETE

export default axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT
})
