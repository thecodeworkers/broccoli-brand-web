import cart from "@graphql/query/shops/cart"
import { authId } from '@utils/pageIds'

const addToCart = ({ product, quantity, variationId }) => {
  return (`
  addCartItems(input: { items: {productId: ${product}, quantity: ${quantity}, variationId: ${variationId}}, clientMutationId: "${authId}"}) {
      ${cart()}
    }
  `)
}

export default addToCart
