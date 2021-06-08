import { mutations } from '@graphql';
import { actionObject } from '@utils'
import { LOGOUT, SIGN_IN, SIGN_UP } from './action-types'



export const signUp: any = (values) => async (dispatch) => {
  console.log('data')
  const data: any = await mutations('registerUser', values);

  dispatch(actionObject(SIGN_UP, { ...data, isAuth: true }));
}

export const signIn: any = (values) => async (dispatch) => {

  const data: any = await mutations('login', values);

  dispatch(actionObject(SIGN_IN, { ...data, isAuth: true }));
}

export const logout = () => actionObject(LOGOUT)
