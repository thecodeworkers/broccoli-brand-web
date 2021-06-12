import { GraphQlClient, normalized } from '@utils'
import generalQuery from './generalPage'
import productsQuery from './products'
import registerQuery from './registerPage'
import loginQuery from './loginPage'
import recoverQuery from './recoverPage'
import checkoutQuery from './checkoutPage'

const resource = async (language, auth = null, wcAuth = null) => {
  const query = `
    query Resources {
      ${generalQuery(language)}
      ${productsQuery()}
      ${registerQuery(language)}
      ${loginQuery(language)}
      ${recoverQuery(language)}
      ${checkoutQuery(language)}
    }
  `

  const data: any = await GraphQlClient(query, {}, auth, wcAuth)

  return {
    general: normalized(data?.generalPage?.translation),
    products: normalized(data?.products),
    register: normalized(data?.registerPage?.translation),
    login: normalized(data?.loginPage?.translation),
    recover: normalized(data?.recoverPage?.translation),
    checkout: normalized(data?.checkoutPage?.translation),
    language: language
  }
}

export default resource
