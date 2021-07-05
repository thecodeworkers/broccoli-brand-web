import { SET_LANGUAGE, SET_CONTACT, SET_CURRENCY } from "./action-types"
import { AnyAction } from "redux"

const initialState = {
  contact: false,
  language: 'ES',
  currency: {
    symbol: '$',
    exchange: '1',
    iso: 'USD'
  }
}

const intermittence = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_LANGUAGE:
      return { ...state, ...{ language: payload } }
    case SET_CONTACT:
      return { ...state, contact: payload }
    case SET_CURRENCY:
      return { ...state, currency: payload }
    default:
      return state
  }
}

export default intermittence
