import { ALERT } from './action-types'
import { AnyAction } from 'redux'

const initialState = {
  show: false,
  message: '',
  type: ''
}

const setLoaderReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ALERT:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default setLoaderReducer
