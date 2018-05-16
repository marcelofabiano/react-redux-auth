import React from 'react'
import { Switch } from 'react-router-dom'

import Auth from '../modules/Auth/pages/routes'
import Dashboard from '../modules/Dashboard/pages/routes'
import Companies from '../modules/Companies/pages/routes'
import PageErrors from '../modules/PageErrors/pages/routes'

const routes = []

const container = routes.concat(
  Auth,
  Dashboard,
  Companies,
  PageErrors, // must always be the last
)

export default props => (
  <Switch>
    {container}
  </Switch>
)
