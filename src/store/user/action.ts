import { mutations } from '@graphql';
import { setAlert } from '@store/alert/action';
import { LOADER } from '@store/loader/action-types';
import { closeModal } from '@store/modal/action';
import { actionObject } from '@utils'
import { FORGOT_PASSWORD, LOGOUT, SIGN_IN, SIGN_UP } from './action-types'



export const signUp: any = (values) => async (dispatch) => {
  try {
    dispatch(actionObject(LOADER, true))

    const data: any = await mutations('registerCustomer', values);

    if (data.message) throw new Error(data.message);

    dispatch(actionObject(SIGN_UP, { ...{ user: data.customer }, isAuth: true }));
    dispatch(setAlert('Creado usuario exitosamente', true, 'success'))
    dispatch(actionObject(LOADER, false))
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

    dispatch(actionObject(SIGN_IN, { ...data, isAuth: true }));
    dispatch(setAlert('Inicio de sesion Exitoso', true, 'success'))
    dispatch(actionObject(LOADER, false))
    dispatch(closeModal())
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    if (error.message === 'incorrect_password') return dispatch(setAlert('Contrasena Invalida', true, 'warning'))
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))

  }
}

export const guestUser: any = () => async (dispatch) => {
  dispatch(actionObject(SIGN_IN, { ...{ user: { email: 'guest' } }, isAuth: true }));
  dispatch(closeModal())
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


export const logout = () => actionObject(LOGOUT)
