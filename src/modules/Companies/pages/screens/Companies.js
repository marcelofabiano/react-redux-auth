import React, { Component } from 'react'

import Authenticated from '../../../Auth/services/Authenticated'

class Companies extends Component {
  render() {
    return (
      <Authenticated>
        <h1>Companies</h1>
      </Authenticated>
    )
  }
}

export default Companies
