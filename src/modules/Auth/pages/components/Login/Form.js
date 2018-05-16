import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loginRequest } from '../../../store/actions/auth'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { credentials: { email: null, password: null, }}
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange(event) {
    const field = event.target.name
    const credentials = this.state.credentials
    credentials[field] = event.target.value
    return this.setState({ credentials })
  }

  onSave(event) {
    event.preventDefault()
    this.props.loginRequest(this.state.credentials)
  }

  render() {
    return (
      <form>
        <label htmlFor='email'>E-mail</label>
        <input
          name='email'
          onChange={this.onChange}
          value={this.state.email}
          type='email'
          placeholder='E-mail...'
          id='email'
          className='form-control'
          required
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          onChange={this.onChange}
          value={this.state.password}
          type='password'
          placeholder='Password...'
          id='password'
          className='form-control'
          required
        />
        <br />
        <button
          onClick={this.onSave}
          className='btn btn-primary btn-block'
          type='submit'
        >
          Login
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  email: state.auth.credentials.email,
  password: state.auth.credentials.password
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loginRequest }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
