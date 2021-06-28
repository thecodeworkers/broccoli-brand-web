import { GraphQlClient, normalized, normalizedArray } from '@utils'
import generalQuery from './generalPage'
import productsQuery from './products'
import registerQuery from './registerPage'
import loginQuery from './loginPage'
import recoverQuery from './recoverPage'
import checkoutQuery from './checkoutPage'
import changeQuery from './changePage'
import productCategories from './productCategories'
import attributes from './attributes'
import currencies from './currencies'
import alerts from './alerts'

const resource = async (language, auth = null, wcAuth = null) => {
  const query = `
    query Resources {
      ${generalQuery(language)}
      ${productsQuery(language)}
      ${registerQuery(language)}
      ${loginQuery(language)}
      ${recoverQuery(language)}
      ${checkoutQuery(language)}
      ${changeQuery(language)}
      ${attributes(language)}
      ${productCategories(language)}
      ${alerts(language)}
      ${currencies}
    }
  `

  const data: any = await GraphQlClient(query, {}, auth, wcAuth)

  return {
    general: normalized(data?.generalPage?.translation),
    products: normalizedArray(data?.products?.nodes),
    register: normalized(data?.registerPage?.translation),
    login: normalized(data?.loginPage?.translation),
    recover: normalized(data?.recoverPage?.translation),
    checkout: normalized(data?.checkoutPage?.translation),
    change: normalized(data?.changePage?.translation),
    productCategories: normalizedArray(data?.productCategories?.nodes),
    attributes: normalizedArray(data?.attributes?.nodes),
    currencies: normalizedArray(data?.currencies?.nodes),
    alerts: normalizedArray(data?.alerts?.nodes),
    language: language
  }
}

export default resource
