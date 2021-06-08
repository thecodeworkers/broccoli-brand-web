import { GraphQlClient, normalized } from '@utils'
import loginMutation from './loginUser'
import registerMutation from './registerUser'

const mutations = async (resource: any, values) => {

  const resources = {
    'login': loginMutation,
    'registerUser': registerMutation
  }

  const query = `
    mutation Mutations {
      ${resources[resource](values)}
    }
  `
  const result: any = await GraphQlClient(query)

  return normalized(result)
}

export default mutations
