import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginRequest } from '../../../store/actions/auth'

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='E-mail...' ref='email' id='email' className='form-control' required/>
        <br />
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Password...' ref='password' id='password' className='form-control' required/>
        <br />
        <button className='btn btn-primary btn-block' type='submit'>Login</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.auth.data,
    isLoading: state.auth.isLoading,
    isAuth: state.auth.isAuth,
    expired: state.auth.expired,
    token: state.auth.token,
    error: state.auth.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: () => dispatch(loginRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
