import { AnyAction } from 'redux'
import { SET_LANGUAGE, SET_RESOURCES } from './action-types'

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
  language: 'ES',
  currency: {
    symbol: '$',
    exchange: '1',
    iso: 'USD'
  },
  countries: [],
  payment: {},
  alerts: []
}

const resourceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_RESOURCES:
      return { ...state, ...payload }
    case SET_LANGUAGE:
      return { ...state, ...{ language: payload } }
    default:
      return state
  }
}

export default resourceReducer
