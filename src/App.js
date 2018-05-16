import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './assets/css/custom.css'
import Navbar from './common/layouts/Navbar'
import RouteView from './init/routes'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <RouteView />
      </div>
    )
  }
}

export default withRouter(App)
