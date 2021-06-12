import { SET_LANGUAGE, SET_RESOURCES, } from './action-types'
import { actionObject } from '../../utils'
import { pages, resources } from '../../graphql/query'
import { GET_PAGES } from '@store/page/action-types'
import { LOADER } from '@store/loader/action-types'
import { getCart } from '@store/actions'

export const getResources: any = () => async (dispatch, getState) => {
  dispatch(actionObject(LOADER, true))
  const { resource: { language }, page, user: { user: { jwtAuthToken } } } = getState()
  const allResources = await resources(language, jwtAuthToken)
  const result: any = await pages('homePage', language)
  page['homePage'] = result;
  if (!page.consultPages.includes('homePage')) page.consultPages.push('homePage');

  dispatch(getCart())
  dispatch(actionObject(SET_RESOURCES, allResources))
  dispatch(actionObject(GET_PAGES, page))
  dispatch(actionObject(LOADER, false))
}

export const changeLanguage: any = (language) => async (dispatch, getState) => {
  dispatch(actionObject(LOADER, true))
  const { page, user: { user: { jwtAuthToken } } } = getState()

  const allResources: any = await resources(language, jwtAuthToken);

  for (let pag of page.consultPages) {
    const result: any = await pages(pag, language)
    page[pag] = result;
  }
  dispatch(getCart())
  dispatch(actionObject(SET_RESOURCES, allResources));
  dispatch(actionObject(GET_PAGES, page))
  dispatch(actionObject(LOADER, false))
}
