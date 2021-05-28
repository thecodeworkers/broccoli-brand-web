import { SET_LANGUAGE, SET_RESOURCES, } from './action-types'
import { actionObject } from '../../utils'
import { pages, resources } from '../../graphql/query'
import { GET_PAGES } from '@store/page/action-types'

export const getResources: any = () => async (dispatch, getState) => {
  const { resource: { language }, page } = getState()
  const allResources = await resources(language)
  const result: any = await pages('homePage', language)
  page['homePage'] = result;
  if (!page.consultPages.includes('homePage')) page.consultPages.push('homePage');

  dispatch(actionObject(SET_RESOURCES, allResources))
  dispatch(actionObject(GET_PAGES, page))
}

export const changeLanguage: any = (language) => async (dispatch, getState) => {

  const { page } = getState()

  const allResources: any = await resources(language);

  for (let pag of page.consultPages) {
    const result: any = await pages(pag, language)
    page[pag] = result;
  }
  dispatch(actionObject(SET_RESOURCES, allResources));
  dispatch(actionObject(GET_PAGES, page))
}
