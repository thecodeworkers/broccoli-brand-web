import { AnyAction } from 'redux'
import { SET_FILTER, RECENT_VIEW, SET_SEARCH } from './action-types'

const initialState = {
  filter: {
    'attributes': [],
    'categories': []
  },
  shop: [],
  recent: [],
  search: {
    valid: false,
    text: ''
  },
}

const shopReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_FILTER:
      return { ...state, ...{ filter: payload.filter, shop: payload.shop } }
    case RECENT_VIEW:
      return { ...state, ...{ recent: payload } }
    case SET_SEARCH:
      console.log(payload)
      return { ...state, ...{ search: payload } }
    default:
      return state
  }
}

export default shopReducer
