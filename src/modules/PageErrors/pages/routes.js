import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Page404 from './screens/Page404'
import Page403 from './screens/Page403'

export default [
  <Route key='403' exact path='/403' component={Page403} />,
  <Route key='404' exact path='/404' component={Page404} />,
  <Route key='any' exact path="*" render={ () => ( <Redirect to='/404' /> ) } />
]
