import { GraphQlClient, normalized, normalizedArray } from '@utils'
import homePageQuery from './homePage'
import aboutPageQuery from './aboutPage'
import shopPageQuery from './shopPage'

const pages = async (resource: any, language) => {
  
  const resources = {
    'homePage': homePageQuery(language),
    'aboutPage': aboutPageQuery(language),
    'shopPage': shopPageQuery(language)
  }

  const query = `
    query Page {
      ${resources[resource]}
    }
  `
  
  const result: any = await GraphQlClient(query)

  const data = ('translation' in result[resource]) ? result[resource].translation : result[resource]

  const returnData = 'nodes' in data ? normalizedArray(data.nodes) : normalized(data)

  return (result) ? returnData : {}
}

export default pages
