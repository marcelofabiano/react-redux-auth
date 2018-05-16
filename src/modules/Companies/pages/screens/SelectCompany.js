import React, { Component } from 'react'

import Authenticated from '../../../Auth/services/Authenticated'

class SelectCompany extends Component {
  render() {
    return (
      <Authenticated>
        <h1>Select Company</h1>
      </Authenticated>
    )
  }
}

export default SelectCompany
