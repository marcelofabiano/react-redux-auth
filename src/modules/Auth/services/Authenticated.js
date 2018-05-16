import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Authenticated = (props) => {
  if (props.isAuth) {
    return <div className='private'>{props.children}</div>
  }
  return <Redirect to='/login' />
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })

export default connect(mapStateToProps)(Authenticated)
