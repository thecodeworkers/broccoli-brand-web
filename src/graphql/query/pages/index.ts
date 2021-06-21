import { GraphQlClient, normalized, normalizedArray } from '@utils'
import homePageQuery from './homePage'
import aboutPageQuery from './aboutPage'
import shopPageQuery from './shopPage'
import productQuery from './productPage'
import guest from './guest'
import profilePageQuery from './profilePage'

const pages = async (resource: any, language, id: string = '') => {
  const resources = {
    'homePage': homePageQuery(language),
    'aboutPage': aboutPageQuery(language),
    'shopPage': shopPageQuery(language),
    'productPage': productQuery(id),
    'customer': guest(),
    'profilePage': profilePageQuery(language),
  }

  const query = `
    query Page {
      ${resources[resource]}
    }
  `
  const result: any = await GraphQlClient(query)

  if (result[resource]) {

    const data = ('translation' in result[resource]) ? result[resource].translation : result[resource]

    const returnData = 'nodes' in data ? normalizedArray(data.nodes) : normalized(data)
    if (result['sessionToken']) returnData['sessionToken'] = result['sessionToken']
    return returnData
  }
  return {}

}

export default pages
