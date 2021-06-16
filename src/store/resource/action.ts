import { SET_LANGUAGE, SET_RESOURCES, } from './action-types'
import { actionObject } from '../../utils'
import { pages, resources } from '../../graphql/query'
import { GET_PAGES } from '@store/page/action-types'
import { LOADER } from '@store/loader/action-types'
import { getCart } from '@store/actions'

export const getResources: any = (pageType, lang = 'ES') => async (dispatch, getState) => {
  dispatch(actionObject(LOADER, true))
  const { page, user: { user: { jwtAuthToken } } } = getState()
  
  const allResources = await resources(lang, jwtAuthToken)
  const result: any = await pages(pageType, lang)
  page[pageType] = result;
  if (!page.consultPages.includes(pageType)) page.consultPages.push(pageType);

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
