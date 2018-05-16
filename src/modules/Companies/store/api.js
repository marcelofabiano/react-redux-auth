import axios from 'axios'

import { ENDPOINT, BASE_URL, TIMEOUT } from '../../../config/api'

export const COMPANIES = ENDPOINT+'companies' // GET
export const COMPANY = ENDPOINT+'companies/{id}' // GET
export const COMPANY_CREATE = ENDPOINT+'companies' // POST
export const COMPANY_UPDATE = ENDPOINT+'companies/{id]' // PUT
export const COMPANY_ARCHIVE = ENDPOINT+'companies/{id}/archive' // PUT
export const COMPANY_DESTROY = ENDPOINT+'companies/{id}' // DELETE

export default axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
