import { GET_CART, ADD_TO_CART } from './action-types'
import { actionObject } from '../../utils'
import { LOADER } from '@store/loader/action-types'
import { mutations, shops } from '@graphql'

export const getCart: any = () => async (dispatch, getState) => {
  const { user: { isAuth, sessionToken, jwtAuthToken } } = getState()
  const shop = await shops(isAuth, jwtAuthToken, sessionToken)
  dispatch(actionObject(GET_CART, shop))
}

export const addToCar: any = (product: any, quantity: any) => async (dispatch, getState) => {
  dispatch(actionObject(LOADER, true))

  const { user: { isAuth, sessionToken, jwtAuthToken } } = getState()
  const data: any = (isAuth) ? await mutations('addToCart', { product, quantity }, jwtAuthToken, sessionToken) : {}
  dispatch(actionObject(ADD_TO_CART, data))
  dispatch(actionObject(LOADER, false))
}
