import { AnyAction } from 'redux'
import { SET_FILTER, RECENT_VIEW } from './action-types'

const initialState = {
  filter: {
    'attributes': [],
    'categories': []
  },
  shop: [],
  recent: []
}

const shopReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_FILTER:
      return { ...state, ...{ filter: payload.filter, shop: payload.shop } }
    case RECENT_VIEW:
      return { ...state, ...{ recent: payload } }
    default:
      return state
  }
}

export default shopReducer
