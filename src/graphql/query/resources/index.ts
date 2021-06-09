import { GraphQlClient, normalized } from '@utils'
import generalQuery from './generalPage'
import registerQuery from './registerPage'
import loginQuery from './loginPage'
import recoverQuery from './recoverPage'

const resource = async (language) => {
  const query = `
    query Resources {
      ${generalQuery(language)}
      ${registerQuery(language)}
      ${loginQuery(language)}
      ${recoverQuery(language)}
    }
  `

  const data: any = await GraphQlClient(query)

  return {
    general: normalized(data?.generalPage?.translation),
    register: normalized(data?.registerPage?.translation),
    login: normalized(data?.loginPage?.translation),
    recover: normalized(data?.recoverPage?.translation),
    language: language
  }
}

export default resource
