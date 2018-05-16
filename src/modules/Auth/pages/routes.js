import React from 'react'
import { Route } from 'react-router-dom'

import Login from './screens/Login'

export default [
  <Route key='login' exact path='/login' component={Login} />
]
