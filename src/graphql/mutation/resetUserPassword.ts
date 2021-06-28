import { authId } from '@utils/pageIds'

const resetUserPassword = ({ key, user, password }) => {
  return (`
  resetUserPassword(input: {clientMutationId: "${authId}", key: "${key}", login: "${user}", password: "${password}"}) {
    clientMutationId
  }
  `)
}

export default resetUserPassword
