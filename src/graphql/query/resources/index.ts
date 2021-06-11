import { GraphQlClient, normalized } from '@utils'
import generalQuery from './generalPage'
import productsQuery from './products'
import registerQuery from './registerPage'
import loginQuery from './loginPage'
import recoverQuery from './recoverPage'
import checkoutQuery from './checkoutPage'
import cartQuery from './cart'

const resource = async (language, isAuth) => {
  const query = `
    query Resources {
      ${generalQuery(language)}
      ${productsQuery()}
      ${registerQuery(language)}
      ${loginQuery(language)}
      ${recoverQuery(language)}
      ${checkoutQuery(language)}
      ${(isAuth) ? cartQuery() : ''}
    }
  `

  const data: any = await GraphQlClient(query)

  return {
    general: normalized(data?.generalPage?.translation),
    products: normalized(data?.products),
    register: normalized(data?.registerPage?.translation),
    login: normalized(data?.loginPage?.translation),
    recover: normalized(data?.recoverPage?.translation),
    checkout: normalized(data?.checkoutPage?.translation),
    cart: normalized(data?.cart),
    language: language
  }
}

export default resource
