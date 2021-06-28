import { AnyAction } from 'redux'
import { SIGN_UP, SIGN_IN, LOGOUT, SET_CHECKOUT } from './action-types'

const initialState = {
  isAuth: false,
  user: {},
  isGuest: false,
  checkout: {
    shipping: {
      isValid: false
    },
    billing: {
      isValid: false
    },
    payment: {
      isValid: false
    }
  }
}

const userReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SIGN_UP:
      return { ...state, ...payload }

    case SIGN_IN:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    case SET_CHECKOUT:
      return { ...state, checkout: payload }

    default:
      return state
  }
}

export default userReducer
