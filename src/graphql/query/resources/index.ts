import { GraphQlClient, normalized } from '@utils'
import generalQuery from './generalPage'
import registerQuery from './registerPage'
import loginQuery from './loginPage'

const resource = async (language) => {
  const query = `
    query Resources {
      ${generalQuery(language)}
      ${registerQuery(language)}
      ${loginQuery(language)}
    }
  `

  const data: any = await GraphQlClient(query)

  return {
    general: normalized(data?.generalPage?.translation),
    register: normalized(data?.registerPage?.translation),
    login: normalized(data?.loginPage?.translation),
    language: language
  }
}

export default resource
