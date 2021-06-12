import { GraphQlClient, normalized } from '@utils'
import cartQuery from './cart'

const cart = async (isAuth, auth = null, wcAuth = null) => {
  const query = `
    query Resources {
      ${(isAuth) ? cartQuery() : ''}
    }
  `

  const data: any = await GraphQlClient(query, {}, auth, wcAuth)

  return {
    cart: normalized(data?.cart),
  }
}

export default cart
