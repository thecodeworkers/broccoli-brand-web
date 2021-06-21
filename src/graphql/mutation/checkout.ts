import { authId } from '@utils/pageIds'



const checkout = ({ billing, shipping }) => {
  const billingName = billing?.name?.split(' ')
  const shippingName = shipping?.name?.split(' ')

  return (`
  checkout(input: {
    billing: {
      address1: "${billing?.address}", 
      address2: "${billing?.secondAddress}", 
      city: "${billing?.city}", 
      country: VE, 
      email: "${billing?.email}", 
      firstName: "${billingName[0]}", 
      lastName: "${billingName[1] ? billingName[1] : ''}"
      overwrite: true, 
      phone: "${billing.phone}", 
      postcode: "${billing.zip}", 
      state: ""
    }, 
    clientMutationId: "${authId}", 
    isPaid: true, 
    paymentMethod: "paypal", 
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
    shipToDifferentAddress: true, 
    shippingMethod: "flat_rate"
  }) {
    result
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

export default checkout
