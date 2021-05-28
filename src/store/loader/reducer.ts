import { LOADER } from './action-types'
import { AnyAction } from 'redux'

const initialState = {
  show: false
}

const setLoaderReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case LOADER:
      return { ...state, show: payload }
    default:
      return state
  }
}

export default setLoaderReducer
