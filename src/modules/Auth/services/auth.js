import React from 'react'
import { connect } from 'react-redux'

import Login from '../pages/screens/Login'

const AuthenticationRequired = props => {
  if (props.isAuth)
    return this.props.children
  return <Login />
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })

export default connect(mapStateToProps)(AuthenticationRequired)
