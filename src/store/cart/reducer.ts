import { AnyAction } from 'redux'
import { GET_CART, ADD_TO_CART } from './action-types'

const initialState = {
  cart: {},
}

const resourceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_CART:
      return { ...state, ...payload }
    case ADD_TO_CART:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default resourceReducer
