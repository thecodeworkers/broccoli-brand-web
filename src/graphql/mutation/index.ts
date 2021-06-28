import { GraphQlClient, normalized } from '@utils'
import loginMutation from './loginUser'
import registerMutation from './registerUser'
import sendPasswordResetMutation from './sendPasswordResetEmail'
import addToCarMutation from './addToCar'
import removeFromCartMutation from './removeItem'
import changePassword from './changePassword'
import sendEmail from './sendEmail'
import checkout from './checkout'
import Quantity from './updateQuantity'
import addCoupon from './addCoupon'
import refreshToken from './refreshToken'
import updateShippingMethod from './updateShippingMethod'
import addFee from './addFee'
import emptyCart from './emptyCart'

const mutations = async (resource: any, values, auth = null, wcAuth = null) => {

  const resources = {
    'login': loginMutation,
    'registerCustomer': registerMutation,
    'sendPasswordResetEmail': sendPasswordResetMutation,
    'addCartItems': addToCarMutation,
    'removeItemsFromCart': removeFromCartMutation,
    'updateCustomer': changePassword,
    'sendEmail': sendEmail,
    'checkout': checkout,
    'updateItemQuantities': Quantity,
    'applyCoupon': addCoupon,
    'refreshJwtAuthToken': refreshToken,
    'updateShippingMethod': updateShippingMethod,
    'addFee': addFee,
    'emptyCart': emptyCart
  }

  const query = `
    mutation Mutations {
      ${resources[resource](values)}
    }
  `
  
  const result: any = await GraphQlClient(query, {}, auth, wcAuth)
  if ('message' in result) return result;
  return normalized(result[resource])
}

export default mutations
