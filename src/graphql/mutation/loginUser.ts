import { authId } from '@utils/pageIds'

const loginUser = ({ email, password }) => {
  return (`
      login( input: {
        clientMutationId: "${authId}",
        username: "${email}",
        password: "${password}"
      } ) {
        authToken
        user {
          email
        }
      }
  `)
}

export default loginUser
