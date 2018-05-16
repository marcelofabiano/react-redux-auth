import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './assets/css/custom.css'
import Navbar from './common/layouts/Navbar'
import RouteView from './init/routes'

const offLayout = [
  '/login', '/register', 'forgot_password', '/404', '/403', '/select_company'
]

class App extends Component {
  render() {
    if (offLayout.indexOf(this.props.location.pathname) > -1)
      return <RouteView />
    return (
      <div>
        <Navbar />
        <RouteView />
      </div>
    )
  }
}

export default withRouter(App)
