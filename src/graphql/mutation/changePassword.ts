import { authId } from '@utils/pageIds'

const changePassword = ({ password, billing = null, shipping = null, account = null }) => {
  const billingName = billing?.name?.split(' ')
  const shippingName = shipping?.name?.split(' ')
  const nameArray = account?.name.split(' ')
  
  return (`
      updateCustomer(input: {
        clientMutationId: "${authId}", 
        password: "${password}",
        billing: {
          address1: "${billing?.address}", 
          address2: "${billing?.secondAddress}", 
          city: "${billing?.city}", 
          country: VE, 
          email: "${billing?.email}", 
          firstName: "${billingName[0]}", 
          lastName: "${billingName[1] ? billingName[1] : ''}"
          phone: "${billing.phone}", 
          postcode: "${billing.zip}", 
          state: ""
        },
        shipping: {
          address1: "${shipping?.address}", 
          address2: "${shipping?.secondAddress}", 
          city: "${shipping?.city}", 
          country: VE, 
          email: "${shipping?.email}", 
          firstName: "${shippingName[0]}", 
          lastName: "${shippingName[1] ? shippingName[1] : ''}"
          overwrite: true, 
          phone: "${shipping.phone}", 
          postcode: "${shipping.zip}", 
          state: ""
        }, 
        email: "${account?.email}", 
        firstName: "${nameArray[0]}",
        lastName: "${nameArray[1] ? nameArray[1] : ''}"
      }) {
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

export default changePassword
