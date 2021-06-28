import cart from "@graphql/query/shops/cart"
import { authId } from '@utils/pageIds'

const addFee = ({ name, amount }) => {
  return (`
  addFee(input: { name: "${name}", amount: ${amount}, clientMutationId: "${authId}"}) {
      ${cart()}
    }
  `)
}

export default addFee
