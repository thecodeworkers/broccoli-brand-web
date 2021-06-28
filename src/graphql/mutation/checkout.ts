import { authId } from '@utils/pageIds'

const checkout = ({ billing, shipping }) => {
  const billingName = billing?.name?.split(' ')
  const shippingName = shipping?.name?.split(' ')

  return (`
  checkout(input: {
    billing: {
      address1: "${billing?.address_1}", 
      address2: "${billing?.address_2}", 
      city: "${billing?.city}", 
      country: ${billing?.country}, 
      email: "${billing?.email}", 
      firstName: "${billingName[0]}", 
      lastName: "${billingName[1] ? billingName[1] : ''}"
      overwrite: true, 
      phone: "${billing.phone}", 
      postcode: "${billing.postcode}", 
      state: ""
    }, 
    clientMutationId: "${authId}", 
    isPaid: true, 
    paymentMethod: "bacs", 
    shipping: {
      address1: "${shipping?.address_1}", 
      address2: "${shipping?.address_2}", 
      city: "${shipping?.city}", 
      country: ${shipping.country}, 
      email: "${shipping?.email}", 
      firstName: "${shippingName[0]}", 
      lastName: "${shippingName[1] ? shippingName[1] : ''}"
      overwrite: true, 
      phone: "${shipping.phone}", 
      postcode: "${shipping.postcode}", 
      state: ""
    }, 
    shipToDifferentAddress: true, 
    shippingMethod: "${shipping.shippingMethod}"
  }) {
    result
    order{
      orderNumber
    }
  }
  `)
}

export default checkout
