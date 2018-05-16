import React, { Component } from 'react'

import Authenticated from '../../../Auth/services/Authenticated'

class Dashboard extends Component {
  render() {
    return (
      <Authenticated>
        <h1>Dashbard</h1>
      </Authenticated>
    )
  }
}

export default Dashboard
