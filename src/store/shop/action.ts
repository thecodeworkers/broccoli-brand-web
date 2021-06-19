import { setAlert } from '@store/alert/action';
import { LOADER } from '@store/loader/action-types';
import { closeModal } from '@store/modal/action';
import { actionObject, orderBy, productFilter } from '@utils'
import { SET_FILTER, RECENT_VIEW } from './action-types'

export const setProductFilter: any = (values) => async (dispatch, getState) => {
  try {
    dispatch(actionObject(LOADER, true))

    const { resource: { products } } = getState()

    dispatch(actionObject(SET_FILTER, { filter: values, shop: productFilter(products, values, 'slug') }))
    dispatch(actionObject(LOADER, false))
  } catch (error) {
    console.log(error)
    dispatch(setAlert('Ha ocurrido un error', true, 'warning'))
    dispatch(actionObject(LOADER, false))
  }
}

export const orderProducts: any = (value) => async (dispatch, getState) => {
  dispatch(actionObject(LOADER, true))

  const { shop: { shop, filter } } = getState()

  let data = shop.map((item) => {
    item.date = new Date(item.date).getTime()
    return item
  })

  switch (value) {
    case 'new':
      data = orderBy(data, 'date', 'desc')
      break;
    case 'lowestCost':
      data = orderBy(data, 'price', 'asc')
      break;
    case 'highestCost':
      data = orderBy(data, 'price', 'desc')
      break;
    case 'collection':
      data = orderBy(data, 'outstandingCollection', 'desc', ['productData'])
      break;
    case 'basics':
      data = orderBy(data, 'outstandingCollection', 'asc', ['productData'])
      break;
  }

  dispatch(actionObject(SET_FILTER, { filter: filter, shop: data }))
  dispatch(actionObject(LOADER, false))
}

export const recentlyView = (data) => async (dispatch, getState) => {
  dispatch(actionObject(LOADER, true))
  const { shop: { recent } } = getState()

  let recents = recent;
  if (recents.length >= 6) recents.shift()
  recents.push(data)
  
  dispatch(actionObject(RECENT_VIEW, recents))
  dispatch(actionObject(LOADER, false))
}