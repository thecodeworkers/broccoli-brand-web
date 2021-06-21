import { GET_CART, ADD_TO_CART } from './action-types'
import { actionObject, fetchPostJSON, formatWooCommerceAmount } from '../../utils'
import { LOADER } from '@store/loader/action-types'
import { mutations, shops } from '@graphql'
import { setAlert } from '@store/alert/action'
import getStripe from '@utils/getStripe'

export const getCart: any = () => async (dispatch, getState) => {
  const { user } = getState()
  const shop = await shops(user.isAuth, user?.user?.jwtAuthToken, user?.user?.sessionToken)
  dispatch(actionObject(GET_CART, shop))
}

export const addToCar: any = (product: any, quantity: any) => async (dispatch, getState) => {
  try {
    const { user } = getState()

    if (user?.isAuth) {
      dispatch(actionObject(LOADER, true))

      const data: any = await mutations('addCartItems', { product, quantity }, user?.user?.jwtAuthToken, user?.user?.sessionToken)

      if (data.message) throw new Error(data.message);

      dispatch(actionObject(ADD_TO_CART, data))
      dispatch(setAlert('Producto agregado exitosamente', true, 'success'))
      dispatch(actionObject(LOADER, false))
    }

    if (!user?.isAuth) dispatch(setAlert('Inicie sesion antes de continuar', true, 'warning'))
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

export const processPayment = () => async (dispatch, getState) => {
  try {
    dispatch(actionObject(LOADER, true))

    const { cart: { cart }, user: { user: { sessionToken, jwtAuthToken }, checkout } } = getState()

    const response = await fetchPostJSON('/api/payment-intent', { amount: formatWooCommerceAmount(cart?.total), currency: 'USD', description: 'TESTING' })

    if (response.statusCode === 500) throw new Error("Error al intentar procesar el pago");

    const stripe = await getStripe()

    const { paymentIntent, error } = await stripe.confirmCardPayment(response.client_secret, {
      payment_method: {
        card: checkout?.payment?.card,
        billing_details: {
          name: checkout?.payment?.nameCard,
        },
      },
    })
    
    const data: any = (paymentIntent.status === 'succeeded') ? await mutations('checkout', checkout, jwtAuthToken, sessionToken) : null
    
    console.log(data)

    if (data === null) throw new Error("Error al intentar procesar el pago");

    dispatch(setAlert('Pago procesado con exito', true, 'success'))
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    console.log(error)
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))
  }
}