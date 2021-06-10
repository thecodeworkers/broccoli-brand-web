import { AnyAction } from 'redux'
import { SIGN_UP, SIGN_IN, LOGOUT } from './action-types'

const initialState = {
  isAuth: false,
  user: {}
}

const userReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SIGN_UP:
      return { ...state, ...payload }

    case SIGN_IN:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default userReducer
