import { GET_CART, ADD_TO_CART } from './action-types'
import { actionObject } from '../../utils'
import { LOADER } from '@store/loader/action-types'
import { mutations, shops } from '@graphql'
import { setAlert } from '@store/alert/action'

export const getCart: any = () => async (dispatch, getState) => {
  const { user: { isAuth, user: { sessionToken, jwtAuthToken } } } = getState()

  const shop = await shops(isAuth, jwtAuthToken, sessionToken)

  dispatch(actionObject(GET_CART, shop))
}

export const addToCar: any = (product: any, quantity: any) => async (dispatch, getState) => {
  try {
    dispatch(actionObject(LOADER, true))

    const { user: { isAuth, user: { sessionToken, jwtAuthToken } } } = getState()

    const data: any = (isAuth) ? await mutations('addCartItems', { product, quantity }, jwtAuthToken, sessionToken) : {}

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(ADD_TO_CART, data))
    dispatch(setAlert('Producto agregado exitosamente', true, 'success'))
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))

  }
}

export const removeFromCart: any = (key: any) => async (dispatch, getState) => {
  try {
    dispatch(actionObject(LOADER, true))

    const { user: { isAuth, user: { sessionToken, jwtAuthToken } } } = getState()

    const data: any = (isAuth) ? await mutations('removeItemsFromCart', { key }, jwtAuthToken, sessionToken) : {}

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(ADD_TO_CART, data))
    dispatch(setAlert('Producto removido exitosamente', true, 'success'))
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))

  }
}
