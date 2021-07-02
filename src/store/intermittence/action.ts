
import { SET_CONTACT, SET_LANGUAGE, SET_CURRENCY } from './action-types'
import { actionObject, filter, WooCommerceClient } from '../../utils'
import { pages, resources } from '../../graphql/query'
import { GET_PAGES } from '@store/page/action-types'
import { LOADER } from '@store/loader/action-types'
import { getCart } from '@store/actions'
import { setAlert } from '@store/alert/action'
import { fallbackExchangeApiKey, fallbackExchangeApiUrl } from '@utils/path'
import { SET_RESOURCES } from '@store/resource/action-types'
import { dataResources } from '@store/resource/action'

export const setContact = (value) => actionObject(SET_CONTACT, value)

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

      dispatch(actionObject(SET_CURRENCY, { iso, symbol, exchange: rate }));
      dispatch(actionObject(LOADER, false))
      return
    }
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    dispatch(actionObject(LOADER, false))
    dispatch(setAlert(alerts?.alerts?.generalError, true, 'warning'))
  }

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
  dispatch(actionObject(SET_LANGUAGE, allResources['language']))
  dispatch(actionObject(SET_RESOURCES, dataResources(allResources)));
  dispatch(actionObject(GET_PAGES, page))
  dispatch(actionObject(LOADER, false))

}
