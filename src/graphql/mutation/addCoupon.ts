import cart from "@graphql/query/shops/cart"
import { authId } from '@utils/pageIds'

const addCoupon = ({ code }) => {
  return (`
  applyCoupon(input: { code: "${code}", clientMutationId: "${authId}"}) {
      ${cart()}
    }
  `)
}

export default addCoupon
