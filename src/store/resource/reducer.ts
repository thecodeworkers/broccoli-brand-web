import { AnyAction } from 'redux'
import { SET_LANGUAGE, SET_RESOURCES } from './action-types'

const initialState = {
  general: {},
  language: 'ES',
  products: {},
  register: {},
  login: {},
  recover: {},
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
