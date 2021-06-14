import { authId } from '@utils/pageIds'

const changePassword = ({ password }) => {
  return (`
      updateCustomer(input: {clientMutationId: "${authId}", password: "${password}"}) {
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

export default changePassword
