import React from 'react'
import { Route } from 'react-router-dom'

import SelectCompany from './screens/SelectCompany'

export default [
  <Route key='select_company' exact path='/select_company' component={SelectCompany} />
]
