import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Auth from './modules/Auth/pages/routes'
import Dashboard from './modules/Dashboard/pages/routes'
import Companies from './modules/Companies/pages/routes'
import Page404 from './modules/PageErrors/pages/screens/Page404'
import Page403 from './modules/PageErrors/pages/screens/Page403'

const routes = [
  <Route exact path='/403' component={Page403} />,
  <Route exact path='/404' component={Page404} />,
  <Route exact path="*" render={ () => ( <Redirect to='/404' /> ) } />
]

const container = routes.concat(
  Auth,
  Dashboard,
  Companies
)

export default props => (
  <Switch>
    {container}
  </Switch>
)
