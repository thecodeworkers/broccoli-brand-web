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
          databaseId
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
                    ... on VariableProduct {
                      price
                      stockQuantity
                      totalSales
                      variations(first: 100000) {
                        nodes {
                          id
                          databaseId
                          manageStock
                          price
                          stockQuantity
                          name
                          attributes(first: 100000) {
                            nodes {
                              id
                              name
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                  total
                  quantity
                }
              }
            }
          }
          billing {
            address1
            address2
            firstName
            lastName
            country
            city
            email
            phone
            postcode
          }
          shipping {
            address1
            address2
            city
            country
            email
            firstName
            lastName
            phone
            postcode
          }
          totalSpent
        }
      }
  `)
}

export default loginUser
