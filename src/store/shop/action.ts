import { setAlert } from '@store/alert/action';
import { LOADER } from '@store/loader/action-types';
import { closeModal } from '@store/modal/action';
import { actionObject, productFilter } from '@utils'
import { SET_FILTER, RECENT_VIEW } from './action-types'

export const setProductFilter: any = (values) => async (dispatch, getState) => {
  try {
    dispatch(actionObject(LOADER, true))

    const { resource: { products } } = getState()

    dispatch(actionObject(SET_FILTER, { filter: values, shop: productFilter(products, values, 'slug') }))
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))
    dispatch(actionObject(LOADER, false))
  }
}

