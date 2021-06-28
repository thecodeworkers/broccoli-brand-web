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

export default registerUser
