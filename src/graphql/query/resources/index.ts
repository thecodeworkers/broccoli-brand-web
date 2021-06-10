import { GraphQlClient, normalized } from '@utils'
import generalQuery from './generalPage'
import productsQuery from './products'
import registerQuery from './registerPage'
import loginQuery from './loginPage'
import recoverQuery from './recoverPage'

const resource = async (language) => {
  const query = `
    query Resources {
      ${generalQuery(language)}
      ${productsQuery()}
      ${registerQuery(language)}
      ${loginQuery(language)}
      ${recoverQuery(language)}
    }
  `

  const data: any = await GraphQlClient(query)

  return {
    general: normalized(data?.generalPage?.translation),
    language: language,
    products: normalized(data?.products),
    register: normalized(data?.registerPage?.translation),
    login: normalized(data?.loginPage?.translation),
    recover: normalized(data?.recoverPage?.translation),
  }
}

export default resource
