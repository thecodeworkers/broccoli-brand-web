import { AnyAction } from 'redux'
import { SET_RESOURCES } from './action-types'

const initialState = {
  general: {},
  products: [],
  register: {},
  login: {},
  recover: {},
  checkout: {},
  change: {},
  outstanding: [],
  collection: [],
  attributes: [],
  currencies: [],
  reset: {},
  countries: [],
  payment: {},
  alerts: []
}

const resourceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_RESOURCES:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default resourceReducer
