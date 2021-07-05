import { mutations, pages } from '@graphql';
import { setAlert } from '@store/alert/action';
import { getCart } from '@store/cart/action';
import { LOADER } from '@store/loader/action-types';
import { closeModal } from '@store/modal/action';
import { actionObject, filter, WooCommerceClient, setCamelCaseKey } from '@utils'
import { FORGOT_PASSWORD, LOGOUT, SET_CHECKOUT, SIGN_IN, SIGN_UP } from './action-types'

export const signUp: any = (values) => async (dispatch, getState) => {
  const { resource: { alerts } } = getState()

  try {
    dispatch(actionObject(LOADER, true))

    const data: any = await mutations('registerCustomer', values);

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(SIGN_UP, { ...{ user: data.customer }, isAuth: true }));
    dispatch(setAlert(alerts?.alerts?.successCreateUser, true, 'success'))
    dispatch(actionObject(LOADER, false))
    dispatch(getCart())
    dispatch(closeModal())
  } catch (error) {
    dispatch(setAlert(alerts?.alerts?.errorCreateUser, true, 'warning'))
    dispatch(actionObject(LOADER, false))
  }
}

export const signIn: any = (values) => async (dispatch, getState) => {
  const { resource: { alerts } } = getState()
  try {
    dispatch(actionObject(LOADER, true))

    const data: any = await mutations('login', values);

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(SIGN_IN, { ...{ user: { ...data.customer, ...data.user } }, isAuth: true }));
    dispatch(setAlert(alerts?.alerts?.successLogin, true, 'success'))
    dispatch(getCart())
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    if (error.message === 'incorrect_password') return dispatch(setAlert(alerts?.alerts?.badPasswordLogin, true, 'warning'))
    dispatch(setAlert(alerts?.alerts?.errorLogin, true, 'warning'))

  }
}

export const updateUserData: any = () => async (dispatch, getState) => {

  const { user: { user }, resource: { products, alerts } } = getState()
  try {
    if (user?.databaseId) {
      dispatch(actionObject(LOADER, true))

      let orders = await WooCommerceClient('orders')
      orders = filter(orders, user?.databaseId, 'customer_id')

      orders = orders.map((order) => {
        order = setCamelCaseKey(order)
        order.orderNumber = order.number
        order.date = order.dateCreated
        order.lineItems = {
          nodes: order.lineItems.map(item => {
            item = setCamelCaseKey(item)
            item = { ...item, ...filter(products, item.productId, 'databaseId')[0] }
            item.variation = (item?.variations?.nodes) ? filter(item.variations.nodes, item.variationId, 'databaseId')[0] : null
            return item
          })
        }
        return order
      })

      dispatch(actionObject(SIGN_IN, { ...{ user: { ...user, ...{ orders: { nodes: orders } } } }, isAuth: true }));
      dispatch(actionObject(LOADER, false))
    }
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.generalError, true, 'warning'))
  }
}

export const cancelOrder: any = (value) => async (dispatch, getState) => {

  const { user: { user }, resource: { products, alerts } } = getState()
  try {
    if (user?.databaseId) {
      dispatch(actionObject(LOADER, true))

      await WooCommerceClient(`orders/${value}`, 'PUT', { status: 'cancelled' })

      let orders = await WooCommerceClient('orders')
      orders = filter(orders, user?.databaseId, 'customer_id')

      orders = orders.map((order) => {
        order = setCamelCaseKey(order)
        order.orderNumber = order.number
        order.date = order.dateCreated
        order.lineItems = {
          nodes: order.lineItems.map(item => {
            item = setCamelCaseKey(item)
            item = { ...item, ...filter(products, item.productId, 'databaseId')[0] }
            item.variation = (item.variations?.nodes) ? filter(item.variations.nodes, item.variationId, 'databaseId')[0] : null
            if (item?.variation?.attributes) item.variation.attributes = item.variation.attributes.nodes
            return item
          })
        }
        return order
      })

      dispatch(actionObject(SIGN_IN, { ...{ user: { ...user, ...{ orders: { nodes: orders } } } }, isAuth: true }))
      dispatch(setAlert(alerts?.alerts?.successCancelOrder, true, 'success'))
      dispatch(actionObject(LOADER, false))
    }
  } catch (error) {
    dispatch(setAlert(alerts?.alerts?.errorCancelOrder, true, 'success'))
    dispatch(actionObject(LOADER, false))
  }
}

export const guestUser: any = () => async (dispatch, getState) => {

  const { resource: { alerts }, intermittence: { language } } = getState()
  try {
    dispatch(actionObject(LOADER, true))


    const data: any = await pages('customer', language);

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(SIGN_IN, { ...{ user: { ...data, ...{ username: 'guest', firstName: 'guest' } } }, isAuth: true, isGuest: true }));
    dispatch(setAlert(alerts?.alerts?.successGuest, true, 'success'))
    dispatch(getCart())
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorGuest, true, 'warning'))
  }

}

export const changePassword: any = (values) => async (dispatch, getState) => {
  const { user: { user }, resource: { alerts } } = getState()
  try {
    dispatch(actionObject(LOADER, true))

    const data: any = await WooCommerceClient(`customers/${user?.databaseId}`, 'PUT', { password: values.password })

    dispatch(setAlert(alerts?.alerts?.successChangePassword, true, 'success'))
    dispatch(getCart())
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorChangePassword, true, 'warning'))
  }
}


export const forgotPassword: any = (values) => async (dispatch, getState) => {
  const { resource: { alerts } } = getState()
  try {
    dispatch(actionObject(LOADER, true))
    const data: any = await mutations('sendPasswordResetEmail', values);
    if (data.message) throw new Error(data.message);

    dispatch(actionObject(FORGOT_PASSWORD));
    dispatch(setAlert(alerts?.alerts?.successForgotPassword, true, 'success'))
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    if (error.message === 'Invalid username.') return dispatch(setAlert(alerts?.alerts?.invalidUserForgotPassword, true, 'warning'))
    dispatch(setAlert(alerts?.alerts?.errorForgotPassword, true, 'warning'))

  }
}

export const restorePassword: any = (values) => async (dispatch, getState) => {
  const { resource: { alerts } } = getState()
  try {
    dispatch(actionObject(LOADER, true))
    const data: any = await mutations('resetUserPassword', values);
    if (data.message) throw new Error(data.message);

    dispatch(actionObject(FORGOT_PASSWORD));
    dispatch(setAlert(alerts?.alerts?.successChangePassword, true, 'success'))
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    if (error.message === 'Invalid username.') return dispatch(setAlert(alerts?.alerts?.invalidUserForgotPassword, true, 'warning'))
    dispatch(setAlert(alerts?.alerts?.errorChangePassword, true, 'warning'))

  }
}

export const logout = () => async (dispatch, getState) => {
  const { resource: { alerts } } = getState()
  dispatch(actionObject(LOGOUT))
  dispatch(actionObject(LOADER, false))
  dispatch(getCart())
  dispatch(closeModal())
  dispatch(setAlert(alerts?.alerts?.successLogout, true, 'success'))
}

export const checkoutForm = (value) => async (dispatch, getState) => {
  const { user: { checkout } } = getState()
  dispatch(actionObject(SET_CHECKOUT, { ...checkout, ...value }))
}

export const checkoutReset = () => async (dispatch) => {
  dispatch(actionObject(SET_CHECKOUT, { shipping: { isValid: false }, billing: { isValid: false }, payment: { isValid: false } }))
}

export const editUser = () => async (dispatch, getState) => {

  const { user: { user, checkout }, resource: { alerts } } = getState()
  try {
    dispatch(actionObject(LOADER, true))

    const name = checkout?.name?.split(' ')
    const billingName = checkout?.billing?.name?.split(' ')
    const shippingName = checkout?.shipping?.name?.split(' ')

    if (checkout?.name) checkout.first_name = name[0]
    checkout.billing.first_name = billingName[0]
    checkout.shipping.first_name = shippingName[0]

    if (!checkout?.email) delete checkout.email
    if (checkout?.name && name[1]) checkout.last_name = name[1]
    if (billingName[1]) checkout.billing.last_name = billingName[1]
    if (shippingName[1]) checkout.shipping.last_name = shippingName[1]

    const data: any = await WooCommerceClient(`customers/${user?.databaseId}`, 'PUT', checkout)

    const userData = {
      firstName: data?.first_name,
      lastName: data?.last_name,
      shipping: {
        firstName: data?.shipping?.first_name,
        lastName: data?.shipping?.last_name,
        address1: data?.shipping?.address_1,
        address2: data?.shipping?.address_2,
        phone: data?.shipping?.phone,
        country: data?.shipping?.country,
        city: data?.shipping?.city,
        postCode: data?.shipping?.post_code,
      },
      billing: {
        firstName: data?.billing?.first_name,
        lastName: data?.billing?.last_name,
        address1: data?.billing?.address_1,
        address2: data?.billing?.address_2,
        phone: data?.billing?.phone,
        country: data?.billing?.country,
        city: data?.billing?.city,
        postCode: data?.billing?.post_code,
      }
    }

    dispatch(actionObject(SIGN_IN, { ...{ user: { ...user, ...userData }, isAuth: true } }));
    dispatch(setAlert(alerts?.alerts?.successUpdateUser, true, 'success'))
    dispatch(getCart())
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorUpdateUser, true, 'warning'))
  }
}