import { GraphQlClient, normalized, normalizedArray } from '@utils'
import homePageQuery from './homePage'
import aboutPageQuery from './aboutPage'
import shopPageQuery from './shopPage'
import productQuery from './productPage'
import guest from './guest'
import profilePageQuery from './profilePage'
import userPageQuery from './userPage'
import customer from './customer'

const pages = async (resource: any, language, id: string = '', wpAuth = null) => {
  const resources = {
    'homePage': homePageQuery(language),
    'aboutPage': aboutPageQuery(language),
    'shopPage': shopPageQuery(language),
    'productPage': productQuery(id),
    'customer': guest(),
    'profilePage': profilePageQuery(language),
    'userPage': userPageQuery(language),
    'userData': customer(id)
  }

  const query = `
    query Page {
      ${resources[resource]}
    }
  `
  const result: any = await GraphQlClient(query, null, null, wpAuth)

  if (result[resource]) {

    const data = ('translation' in result[resource]) ? result[resource].translation : result[resource]

    const returnData = 'nodes' in data ? normalizedArray(data.nodes) : normalized(data)
    if (result['sessionToken']) returnData['sessionToken'] = result['sessionToken']
    return returnData
  }
  return {}

}

export default pages
