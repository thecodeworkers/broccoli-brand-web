import cart from "@graphql/query/shops/cart"
import { authId } from '@utils/pageIds'

const addToCart = ({ product, quantity }) => {
  return (`
  addCartItems(input: { items: {productId: ${product}, quantity: ${quantity}}, clientMutationId: "${authId}"}) {
      ${cart()}
    }
  `)
}

export default addToCart
