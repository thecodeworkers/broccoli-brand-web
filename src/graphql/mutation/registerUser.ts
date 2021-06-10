import { authId } from '@utils/pageIds'

const registerUser = ({ email, password, name, phone }) => {
  const nameArray = name.split(' ')
  return (`
  registerCustomer(
        input: {
          clientMutationId: "${authId}",
          username: "${email}",
          email: "${email}",
          password: "${password}",
          firstName: "${nameArray[0]}",
          lastName: "${nameArray[1] ? nameArray[1] : ''}"
          billing: { 
            phone: "${phone}"
          }
        }) {
        customer {
          jwtAuthToken
          jwtRefreshToken
          email
        }
      }
  `)
}

export default registerUser
