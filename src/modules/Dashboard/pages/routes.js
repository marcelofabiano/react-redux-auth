import React from 'react'
import { Route } from 'react-router-dom'

import Dashboard from './screens/Dashboard'

export default [
  <Route key='root' exact path='/' component={Dashboard} />,
  <Route key='dashboard' exact path='/dashboard' component={Dashboard} />
]
