import { AnyAction } from 'redux'
import { GET_PAGES } from './action-types'

const initialState = {
  currentPage: '',
  currentData: '',
  welcomePage: {}
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_PAGES:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default pageReducer
