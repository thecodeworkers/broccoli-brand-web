import { authId } from '@utils/pageIds'

const loginUser = ({ email, password }) => {
  return (`
      login( input: {
        clientMutationId: "${authId}",
        username: "${email}",
        password: "${password}"
      } ) {
        customer {
          username
          sessionToken
          jwtAuthToken
          displayName
          firstName
          email
          lastName
          id
          orders(first: 1000000) {
            nodes {
              id
              orderNumber
              total
              subtotal
              status
              shippingTotal
            }
          }
          totalSpent
        }
      }
  `)
}

export default loginUser
