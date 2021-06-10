import { GraphQlClient, normalized } from '@utils'
import loginMutation from './loginUser'
import registerMutation from './registerUser'
import sendPasswordResetMutation from './sendPasswordResetEmail'

const mutations = async (resource: any, values) => {

  const resources = {
    'login': loginMutation,
    'registerCustomer': registerMutation,
    'sendPasswordResetEmail': sendPasswordResetMutation
  }

  const query = `
    mutation Mutations {
      ${resources[resource](values)}
    }
  `
  const result: any = await GraphQlClient(query)
  if('message' in result) return result;
  return normalized(result[resource])
}

export default mutations
