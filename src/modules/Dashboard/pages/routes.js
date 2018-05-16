import React from 'react'
import { Route } from 'react-router-dom'

import Dashboard from './screens/Dashboard'

export default [
  <Route exact path='/' component={Dashboard} />,
  <Route exact path='/dashboard' component={Dashboard} />
]
