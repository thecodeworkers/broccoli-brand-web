import { mutations, pages } from '@graphql';
import { setAlert } from '@store/alert/action';
import { getCart } from '@store/cart/action';
import { LOADER } from '@store/loader/action-types';
import { closeModal } from '@store/modal/action';
import { actionObject } from '@utils'
import { FORGOT_PASSWORD, LOGOUT, SET_CHECKOUT, SIGN_IN, SIGN_UP } from './action-types'

export const signUp: any = (values) => async (dispatch) => {
  try {
    dispatch(actionObject(LOADER, true))

    const data: any = await mutations('registerCustomer', values);

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(SIGN_UP, { ...{ user: data.customer }, isAuth: true }));
    dispatch(setAlert('Creado usuario exitosamente', true, 'success'))
    dispatch(actionObject(LOADER, false))
    dispatch(getCart())
    dispatch(closeModal())
  } catch (error) {
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))
    dispatch(actionObject(LOADER, false))
  }
}

export const signIn: any = (values) => async (dispatch) => {
  try {
    dispatch(actionObject(LOADER, true))

    const data: any = await mutations('login', values);

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(SIGN_IN, { ...{ user: data.customer }, isAuth: true }));
    dispatch(setAlert('Inicio de sesion Exitoso', true, 'success'))
    dispatch(getCart())
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    if (error.message === 'incorrect_password') return dispatch(setAlert('Contrasena Invalida', true, 'warning'))
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))

  }
}

export const guestUser: any = () => async (dispatch, getState) => {
  try {
    dispatch(actionObject(LOADER, true))

    const { resource: { language } } = getState()

    const data: any = await pages('customer', language);

    if (data.message) throw new Error(data.message);
    console.log(data)
    dispatch(actionObject(SIGN_IN, { ...{ user: { ...data, ...{ username: 'guest', firstName: 'guest' } } }, isAuth: true }));
    dispatch(setAlert('Bienvenido Invitado', true, 'success'))
    dispatch(getCart())
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    console.log(error)
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))

  }


}

export const changePassword: any = (values) => async (dispatch, getState) => {
  try {
    dispatch(actionObject(LOADER, true))
    const { user: { user: { sessionToken, jwtAuthToken, id } } } = getState()

    const data: any = await mutations('updateCustomer', { ...values, id: id }, sessionToken, jwtAuthToken);

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(SIGN_IN, { ...{ user: data.customer }, isAuth: true }));
    dispatch(setAlert('Cambio de contrasena con exito', true, 'success'))
    dispatch(getCart())
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))

  }
}


export const forgotPassword: any = (values) => async (dispatch) => {
  try {
    dispatch(actionObject(LOADER, true))
    const data: any = await mutations('sendPasswordResetEmail', values);
    if (data.message) throw new Error(data.message);

    dispatch(actionObject(FORGOT_PASSWORD));
    dispatch(setAlert('Correo enviado con exito', true, 'success'))
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    if (error.message === 'Invalid username.') return dispatch(setAlert('Usuario invalido', true, 'warning'))
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))

  }
}

export const logout = () => async (dispatch) => {
  dispatch(actionObject(LOGOUT))
  dispatch(actionObject(LOADER, false))
  dispatch(getCart())
  dispatch(closeModal())
  dispatch(setAlert('Cerrado sesion con exito', true, 'success'))
}

export const checkoutForm = (value) => async (dispatch, getState) => {
  const { user: { checkout } } = getState()
  dispatch(actionObject(SET_CHECKOUT, { ...checkout, ...value }))
}

export const checkoutReset = () => async (dispatch) => {
  dispatch(actionObject(SET_CHECKOUT, { shipping: { isValid: false }, billing: { isValid: false }, payment: { isValid: false } }))
}

export const editUser = () => async (dispatch, getState) => {
  const { user: { user: { sessionToken, jwtAuthToken }, checkout } } = getState()

  const data: any = await mutations('updateCustomer', checkout, sessionToken, jwtAuthToken);

  if (data.message) throw new Error(data.message);

  dispatch(actionObject(SIGN_IN, { ...{ user: data.customer }, isAuth: true }));
  dispatch(setAlert('Cambio de datos del usuario con exito', true, 'success'))
  dispatch(getCart())
  dispatch(actionObject(LOADER, false))
  dispatch(closeModal())
}