import React, { Component } from 'react'

import './assets/css/custom.css'
import Login from './modules/Auth/pages/screens/Login'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Login />
      </div>
    )
  }
}

export default App
