import { combineReducers } from 'redux'
import loader from './loader/reducer'
import page from './page/reducer'
import resource from './resource/reducer'
import modal from './modal/reducer'
import user from './user/reducer'
import alert from './alert/reducer'
import cart from './cart/reducer'
import shop from './shop/reducer'
import intermittence from './intermittence/reducer'

const reducers = combineReducers({
  loader,
  page,
  resource,
  modal,
  user,
  alert,
  cart,
  shop,
  intermittence
})

export default reducers
