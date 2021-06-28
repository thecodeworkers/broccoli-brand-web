
import { pages } from '@graphql/query'
import { actionObject } from '@utils'
import { GET_PAGES } from '../page/action-types'

const setResources = (data, page, resources) => {
  data[resources] = page
  return data;
}

export const getPages: any = (resources, id = '', lang) => async (dispatch, getState) => {
  
  const result: any = await pages(resources, lang, id)
  const { page } = getState()
  let data = page
  
  data = setResources(data, result, resources);
  data['id'] = id
  if (!data.consultPages.includes(resources)) data.consultPages.push(resources)
  dispatch(actionObject(GET_PAGES, data))
}
