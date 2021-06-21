import { GraphQlClient, normalized } from '@utils'
import loginMutation from './loginUser'
import registerMutation from './registerUser'
import sendPasswordResetMutation from './sendPasswordResetEmail'
import addToCarMutation from './addToCar'
import removeFromCartMutation from './removeItem'
import changePassword from './changePassword'
import sendEmail from './sendEmail'
import checkout from './checkout'

const mutations = async (resource: any, values, auth = null, wcAuth = null) => {

  const resources = {
    'login': loginMutation,
    'registerCustomer': registerMutation,
    'sendPasswordResetEmail': sendPasswordResetMutation,
    'addCartItems': addToCarMutation,
    'removeItemsFromCart': removeFromCartMutation,
    'updateCustomer': changePassword,
    'sendEmail': sendEmail,
    'checkout': checkout
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
