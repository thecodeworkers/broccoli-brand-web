import cart from "@graphql/query/shops/cart"
import { authId } from '@utils/pageIds'

const updateShippingMethod = ({ method }) => {
  return (`
  updateShippingMethod(input: { shippingMethods: "${method}", clientMutationId: "${authId}"}) {
      ${cart()}
    }
  `)
}

export default updateShippingMethod
