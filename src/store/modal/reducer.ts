import { AnyAction } from 'redux'
import { CLOSE_MODAL, OPEN_MODAL } from './action-types'

const initialState = {
  modal: false,
  modalType: null,
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case OPEN_MODAL:
      return { ...state, ...payload }
    case CLOSE_MODAL:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default pageReducer
