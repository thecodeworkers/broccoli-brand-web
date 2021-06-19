import { SET_RESOURCES } from './action-types'
import { actionObject, filter, orderBy, productFilter, simplifyArray } from '../../utils'
import { pages, resources } from '../../graphql/query'
import { GET_PAGES } from '@store/page/action-types'
import { LOADER } from '@store/loader/action-types'
import { getCart } from '@store/actions'
import { mutations } from '@graphql'
import { setAlert } from '@store/alert/action'
import { SET_FILTER } from '@store/shop/action-types'

const dataResources = (data) => {
  data['outstanding'] = orderBy(data.products, 'totalSales', 'asc').slice(0, 4)
  data['collection'] = filter(data.products, true, 'outstandingCollection', ['productData']).slice(0, 3)
  data['attributes'] = simplifyArray(data.attributes)
  data['productCategories'] = simplifyArray(data.productCategories)
  return data
}

export const getResources: any = (pageType, lang = 'ES') => async (dispatch, getState) => {
  
  dispatch(actionObject(LOADER, true))

  const { page, user, shop: { filter } } = getState()

  const allResources = await resources(lang, user?.user?.jwtAuthToken)

  const result: any = await pages(pageType, lang)
  page[pageType] = result

  if (!page.consultPages.includes(pageType)) page.consultPages.push(pageType)

  dispatch(getCart())
  dispatch(actionObject(SET_RESOURCES, dataResources(allResources)))
  dispatch(actionObject(GET_PAGES, page))
  dispatch(actionObject(SET_FILTER, { filter: filter, shop: productFilter(allResources.products, filter, 'slug') }))
  dispatch(actionObject(LOADER, false))
}

export const changeLanguage: any = (language) => async (dispatch, getState) => {
  
  dispatch(actionObject(LOADER, true))
  
  const { page, user } = getState()

  const allResources: any = await resources(language, user?.user?.jwtAuthToken);

  for (let pag of page.consultPages) {
    const result: any = await pages(pag, language)
    page[pag] = result;
  }
  
  dispatch(getCart())
  dispatch(actionObject(SET_RESOURCES, dataResources(allResources)));
  dispatch(actionObject(GET_PAGES, page))
  dispatch(actionObject(LOADER, false))

}

export const sendMail: any = (values) => async (dispatch) => {
  try {
    dispatch(actionObject(LOADER, true))

    const send = {
      body: ` nombre: ${values.name} email: ${values.email} phone: ${values.phone} ${(values.orderNumber) ? `orden: ${values.orderNumber}` : ''} categoria: ${values.category} sujeto: ${values.subject} mensaje: ${values.message}`,
      subject: values.subject
    }

    const data: any = await mutations('sendEmail', send);

    if (!data.sent) throw new Error(data);

    dispatch(setAlert('Envio de correo Exitoso', true, 'success'))
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert('Correo no enviado', true, 'warning'))

  }
}