import { authId } from '@utils/pageIds'

const loginUser = ({ email, password }) => {
  return (`
      login( input: {
        clientMutationId: "${authId}",
        username: "${email}",
        password: "${password}"
      } ) {
        user {
          id
        }
        customer {
          jwtRefreshToken
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
              date
              transactionId
              needsPayment
              lineItems {
                nodes {
                  product {
                    id
                    name
                    image {
                      mediaItemUrl
                      slug
                    }
                    attributes {
                      nodes {
                        label
                        name
                        options
                      }
                    }
                    ... on SimpleProduct {
                      price
                    }
                  }
                  total
                  quantity
                }
              }
            }
          }
          totalSpent
        }
      }
  `)
}

export default loginUser
