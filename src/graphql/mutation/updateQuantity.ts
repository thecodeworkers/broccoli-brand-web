import cart from "@graphql/query/shops/cart"
import { authId } from '@utils/pageIds'

const Quantity = ({ product, quantity }) => {
  return (`
  updateItemQuantities(input: { items: {key: "${product}", quantity: ${quantity}}, clientMutationId: "${authId}"}) {
      ${cart()}
    }
  `)
}

export default Quantity
