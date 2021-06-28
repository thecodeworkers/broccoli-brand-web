import cart from "@graphql/query/shops/cart"
import { authId } from '@utils/pageIds'

const emptyCart = (empty = null) => {
  return (`
  emptyCart(input: {clearPersistentCart: false, clientMutationId: "${authId}"}) {
      ${cart()}
    }
  `)
}

export default emptyCart
