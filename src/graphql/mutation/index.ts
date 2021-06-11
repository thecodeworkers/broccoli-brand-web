import { GraphQlClient, normalized } from '@utils'
import loginMutation from './loginUser'
import registerMutation from './registerUser'
import sendPasswordResetMutation from './sendPasswordResetEmail'
import addToCarMutation from './addToCar'

const mutations = async (resource: any, values, auth = null, wcAuth = null) => {

  const resources = {
    'login': loginMutation,
    'registerCustomer': registerMutation,
    'sendPasswordResetEmail': sendPasswordResetMutation,
    'addToCart': addToCarMutation
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
