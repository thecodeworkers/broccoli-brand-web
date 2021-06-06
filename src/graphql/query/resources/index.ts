import { GraphQlClient, normalized } from '@utils'
import generalQuery from './generalPage'
import productsQuery from './products'

const resource = async (language) => {
  const query = `
    query Resources {
      ${generalQuery(language)}
      ${productsQuery()}
    }
  `

  const data: any = await GraphQlClient(query)

  return {
    general: normalized(data?.generalPage?.translation),
    language: language,
    products: normalized(data?.products)
  }
}

export default resource
