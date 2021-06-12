import cart from "@graphql/query/shops/cart"
import { authId } from '@utils/pageIds'

const removeFromCart = ({ key }) => {
  return (`
  removeItemsFromCart(input: {keys: "${key}", clientMutationId: "${authId}"}) {
      ${cart()}
    }
  `)
}

export default removeFromCart
