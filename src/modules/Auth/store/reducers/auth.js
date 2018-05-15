import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actionTypes'

const INITIAL_STATE =  {data: [], isLoading: false, isAuth: false, error: false, token: null, expired: 0}

const auth = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {data: [], isLoading: false, isAuth: false, error: false, token: null, expired: 0}
    case LOGIN_SUCCESS:
      return {data: [], isLoading: false, isAuth: false, error: false, token: null, expired: 0}
    case LOGIN_FAIL:
      return {data: [], isLoading: false, isAuth: false, error: false, token: null, expired: 0}
    default:
      return state
  }
}

export default auth
