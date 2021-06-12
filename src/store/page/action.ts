
import { pages } from '@graphql/query'
import { actionObject } from '@utils'
import { GET_PAGES } from '../page/action-types'

const setResources = (data, page, resources) => {
  data[resources] = page
  return data;
}

export const getPages: any = (resources, id = '') => async (dispatch, getState) => {
  const { resource: { language } } = getState()
  const result: any = await pages(resources, language, id)
  const { page } = getState()
  let data = page

  data = setResources(data, result, resources);
  if (!data.consultPages.includes(resources)) data.consultPages.push(resources)
  dispatch(actionObject(GET_PAGES, data))
}
