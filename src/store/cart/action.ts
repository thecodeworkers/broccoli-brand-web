import { GET_CART, ADD_TO_CART } from './action-types'
import { actionObject, fetchPostJSON, filter, formatWooCommerceAmount, reduceVariation, RestClient } from '../../utils'
import { LOADER } from '@store/loader/action-types'
import { mutations, shops } from '@graphql'
import { setAlert } from '@store/alert/action'
import getStripe from '@utils/getStripe'

export const getCart: any = () => async (dispatch, getState) => {
  const { user } = getState()
  const shop = await shops(user.isAuth, null, user?.user?.sessionToken)
  dispatch(actionObject(GET_CART, shop))
}

export const addToCar: any = (product: any, quantity: any, variation: any = null) => async (dispatch, getState) => {

  const { user, resource: { alerts } } = getState()

  try {
    if (user?.isAuth) {
      dispatch(actionObject(LOADER, true))

      const variable = reduceVariation(product?.variations?.nodes, variation)

      if (!variable.stockQuantity) throw new Error("stock");


      const data: any = await mutations('addCartItems', { product: product?.databaseId, quantity, variationId: variable?.databaseId }, null, user?.user?.sessionToken)

      if (data.message) throw new Error(data.message);

      dispatch(actionObject(ADD_TO_CART, data))
      dispatch(setAlert(alerts?.alerts?.successAddedProduct, true, 'success'))
      dispatch(actionObject(LOADER, false))
    }

    if (!user?.isAuth) dispatch(setAlert(alerts?.alerts?.loginBeforeContinue, true, 'warning'))
  } catch (error) {
    console.log(error)
    dispatch(actionObject(LOADER, false))
    if (error.message === 'stock') return dispatch(setAlert(alerts?.alerts?.noStock, true, 'warning'))

    dispatch(setAlert(alerts?.alerts?.errorAddedProduct, true, 'warning'))
  }
}

export const addCoupon: any = (code) => async (dispatch, getState) => {
  const { user, resource: { alerts } } = getState()
  try {


    if (user?.isAuth) {
      dispatch(actionObject(LOADER, true))

      const data: any = await mutations('applyCoupon', { code }, null, user?.user?.sessionToken)

      if (data.message) throw new Error(data.message);
      dispatch(actionObject(ADD_TO_CART, data))
      dispatch(setAlert(alerts?.alerts?.successAddedCoupon, true, 'success'))
      dispatch(actionObject(LOADER, false))
    }

    if (!user?.isAuth) dispatch(setAlert(alerts?.alerts?.loginBeforeContinue, true, 'warning'))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorAddedCoupon, true, 'warning'))
  }
}

export const updateQuantity: any = (product: any, type: any) => async (dispatch, getState) => {

  const { user, cart: { cart }, resource: { alerts } } = getState()

  try {

    if (user?.isAuth) {
      dispatch(actionObject(LOADER, true))

      const filtered = filter(cart?.contents?.nodes, product, 'key')
      const quantity = (type === 'add') ? filtered[0]?.quantity + 1 : filtered[0]?.quantity - 1;
      const max = filtered[0]?.product?.node?.stockQuantity
      const min = 0
      if (quantity > min && quantity <= max) {
        const data: any = await mutations('updateItemQuantities', { product: filtered[0]?.key, quantity }, null, user?.user?.sessionToken)

        if (data.message) throw new Error(data.message);

        dispatch(actionObject(ADD_TO_CART, data))
        dispatch(setAlert(alerts?.alerts?.successUpdateProduct, true, 'success'))
        dispatch(actionObject(LOADER, false))
        return
      }
      dispatch(setAlert(alerts?.alerts?.limitUpdateProduct, true, 'warning'))
      dispatch(actionObject(LOADER, false))
    }
    if (!user?.isAuth) dispatch(setAlert(alerts?.alerts?.loginBeforeContinue, true, 'warning'))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorUpdateProduct, true, 'warning'))
  }
}

export const removeFromCart: any = (key: any) => async (dispatch, getState) => {


  const { user: { isAuth, user: { sessionToken } }, resource: { alerts } } = getState()

  try {
    dispatch(actionObject(LOADER, true))


    const data: any = (isAuth) ? await mutations('removeItemsFromCart', { key }, null, sessionToken) : {}

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(ADD_TO_CART, data))
    dispatch(setAlert(alerts?.alerts?.successDeleteProduct, true, 'success'))
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorDeleteProduct, true, 'warning'))
  }
}

export const processPayment = () => async (dispatch, getState) => {

  const { cart: { cart }, user: { user: { sessionToken, databaseId }, checkout }, resource: { alerts } } = getState()
  try {
    dispatch(actionObject(LOADER, true))


    const response = await fetchPostJSON('/api/payment-intent', { amount: formatWooCommerceAmount(cart?.total), currency: 'USD', description: 'TESTING' })

    if (response.statusCode === 500) throw new Error(alerts?.alerts?.errorPayment);

    const stripe = await getStripe()

    const { paymentIntent, error } = await stripe.confirmCardPayment(response.client_secret, {
      payment_method: checkout?.payment?.card,
    })

    if (error) throw new Error(error.code);

    const data: any = (paymentIntent.status === 'succeeded') ? await mutations('checkout', checkout, null, sessionToken) : null

    if (data === null && !data.message) throw new Error(alerts?.alerts?.errorPayment);

    await RestClient(`orders/${data?.order?.orderNumber}`, 'PUT', { customer_id: databaseId, status: 'completed' })

    dispatch(setAlert(alerts?.alerts?.successPayment, true, 'success'))
    dispatch(getCart())
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    if (error.message === 'card_declined') return dispatch(setAlert(alerts?.alerts?.declinedCardPayment, true, 'warning'))
    if (error.message === 'incorrect_cvc') return dispatch(setAlert(alerts?.alerts?.badCvcPayment, true, 'warning'))
    if (error.message === 'expired_card') return dispatch(setAlert(alerts?.alerts?.expiryCardPayment, true, 'warning'))
    if (error.message === 'processing_error') return dispatch(setAlert(alerts?.alerts?.processErrorPayment, true, 'warning'))
    dispatch(setAlert(alerts?.alerts?.processErrorPayment, true, 'warning'))
  }
}

export const updateShipping: any = (method: any) => async (dispatch, getState) => {
  const { user, resource: { alerts } } = getState()
  try {


    if (user?.isAuth) {
      dispatch(actionObject(LOADER, true))

      const data: any = await mutations('updateShippingMethod', { method }, null, user?.user?.sessionToken)

      if (data.message) throw new Error(data.message);

      dispatch(actionObject(ADD_TO_CART, data))
      dispatch(setAlert(alerts?.alerts?.successUpdateShipping, true, 'success'))
      dispatch(actionObject(LOADER, false))
    }

    if (!user?.isAuth) dispatch(setAlert(alerts?.alerts?.loginBeforeContinue, true, 'warning'))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorUpdateShipping, true, 'warning'))
  }
}

export const putFee: any = (name: any, amount) => async (dispatch, getState) => {
  const { user, resource: { alerts } } = getState()
  try {


    if (user?.isAuth) {
      dispatch(actionObject(LOADER, true))

      const data: any = await mutations('addFee', { name, amount }, null, user?.user?.sessionToken)

      if (data.message) throw new Error(data.message);

      dispatch(actionObject(ADD_TO_CART, data))
      dispatch(setAlert(alerts?.alerts?.successUpdateFee, true, 'success'))
      dispatch(actionObject(LOADER, false))
    }

    if (!user?.isAuth) dispatch(setAlert(alerts?.alerts?.loginBeforeContinue, true, 'warning'))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorUpdateFee, true, 'warning'))
  }
}