import React from 'react'
import { Route } from 'react-router-dom'

import SelectCompany from './screens/SelectCompany'
import Companies from './screens/Companies'

export default [
  <Route key='select_company' exact path='/select_company' component={SelectCompany} />,
  <Route key='companies' exact path='/companies' component={Companies} />
]
