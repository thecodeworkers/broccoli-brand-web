import { SET_RESOURCES } from './action-types'
import { actionObject, filter, orderBy, WooCommerceClient, simplifyArray, RestClient } from '../../utils'
import { pages, resources } from '../../graphql/query'
import { GET_PAGES } from '@store/page/action-types'
import { LOADER } from '@store/loader/action-types'
import { getCart } from '@store/actions'
import { mutations } from '@graphql'
import { setAlert } from '@store/alert/action'
import { fallbackExchangeApiKey, fallbackExchangeApiUrl, subscribes } from '@utils/path'

const dataResources = (data) => {
  data['outstanding'] = orderBy(data.products, 'totalSales', 'asc').slice(0, 4)
  data['collection'] = filter(data.products, true, 'outstandingCollection', ['productData']).slice(0, 3)
  data['attributes'] = simplifyArray(data.attributes)
  data['productCategories'] = simplifyArray(data.productCategories)
  return data
}

export const getResources: any = (pageType, lang = 'ES') => async (dispatch, getState) => {

  dispatch(actionObject(LOADER, true))

  const { page } = getState()

  const allResources = await resources(lang)
  const allCountries = await WooCommerceClient('data/countries')
  allResources['countries'] = allCountries
  const result: any = await pages(pageType, lang)
  page[pageType] = result

  if (!page.consultPages.includes(pageType)) page.consultPages.push(pageType)
  dispatch(getCart())
  dispatch(actionObject(SET_RESOURCES, dataResources(allResources)))
  dispatch(actionObject(GET_PAGES, page))
  dispatch(actionObject(LOADER, false))
}

export const changeLanguage: any = (language) => async (dispatch, getState) => {

  dispatch(actionObject(LOADER, true))

  const { page } = getState()

  const allResources: any = await resources(language);
  const allCountries = await WooCommerceClient('data/countries')
  allResources['countries'] = allCountries

  for (let pag of page.consultPages) {
    const result: any = await pages(pag, language, page['id'])
    page[pag] = result;
  }

  dispatch(getCart())
  dispatch(actionObject(SET_RESOURCES, dataResources(allResources)));
  dispatch(actionObject(GET_PAGES, page))
  dispatch(actionObject(LOADER, false))

}

export const changeCurrencies: any = (values) => async (dispatch, getState) => {

  const { resource: { currencies, alerts } } = getState()
  try {
    dispatch(actionObject(LOADER, true))

    const selected = filter(currencies, values, 'iso', ['currencies'])
    const iso = selected[0]?.currencies?.iso
    const url = `${process.env.EXCHANGE_API_URL || fallbackExchangeApiUrl}${process.env.EXCHANGE_API_KEY || fallbackExchangeApiKey}/latest/USD`

    const exchanges = await (await fetch(url)).json()
    if (exchanges?.conversion_rates[iso]) {

      const rate = exchanges?.conversion_rates[iso]
      const symbol = selected[0]?.currencies?.symbol

      dispatch(actionObject(SET_RESOURCES, { currency: { iso, symbol, exchange: rate } }));
      dispatch(actionObject(LOADER, false))
      return
    }
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.generalError, true, 'warning'))
  }


}

export const sendMail: any = (values) => async (dispatch, getState) => {
  const { resource: { alerts } } = getState()
  try {
    dispatch(actionObject(LOADER, true))

    const send = {
      body: ` nombre: ${values.name} email: ${values.email} phone: ${values.phone} ${(values.orderNumber) ? `orden: ${values.orderNumber}` : ''} categoria: ${values.category} sujeto: ${values.subject} mensaje: ${values.message}`,
      subject: values.subject
    }

    const data: any = await mutations('sendEmail', send);

    if (!data.sent) throw new Error(data);

    dispatch(setAlert(alerts?.alerts?.successMailSend, true, 'success'))
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorMailSend, true, 'warning'))

  }
}

export const subscribe: any = (value) => async (dispatch, getState) => {
  const { resource: { alerts } } = getState()
  try {
    dispatch(actionObject(LOADER, true))
    const subs = await RestClient(subscribes, 'POST', value)
    if (!subs) throw new Error("error");
    dispatch(setAlert(alerts?.alerts?.successSubscriptionUser, true, 'success'))
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.errorSubscriptionUser, true, 'warning'))
  }

}