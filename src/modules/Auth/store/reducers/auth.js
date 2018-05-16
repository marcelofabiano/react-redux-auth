import { AC_LOGIN_REQUEST, AC_LOGIN_SUCCESS, AC_LOGIN_FAIL } from '../actionTypes'

const INITIAL_STATE =  {
  credentials: {
    id: 0,
    email: null,
    password: null,
  },
  isLoading: false,
  isAuth: false,
  error: false,
  token: null,
  expired: 0
}

const auth = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AC_LOGIN_REQUEST:
      console.log(action.credentials)
      return {...state}
    case AC_LOGIN_SUCCESS:
      return {...state}
    case AC_LOGIN_FAIL:
      return {...state}
    default:
      return state
  }
}

export default auth
