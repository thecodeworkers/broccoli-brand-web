import { GraphQlClient, normalized } from '@utils'
import generalQuery from './generalPage'

const resource = async (language) => {
  const query = `
    query Resources {
      ${generalQuery(language)}
    }
  `

  const data: any = await GraphQlClient(query)

  return {
    general: normalized(data?.generalPage?.translation)
  }
}

export default resource
