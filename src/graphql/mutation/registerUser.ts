import { authId } from '@utils/pageIds'

const registerUser = ({ email, password, name }) => {
  const nameArray = name.split(' ')
  return (`
      registerUser(
        input: {
          clientMutationId: "${authId}",
          username: "${email}",
          email: "${email}",
          password: "${password}",
          firstName: "${nameArray[0]}",
          lastName: "${nameArray[1] ? nameArray[1] : ''}"
        }) {
        user {
          jwtAuthToken
          jwtRefreshToken
          email
        }
      }
  `)
}

export default registerUser
