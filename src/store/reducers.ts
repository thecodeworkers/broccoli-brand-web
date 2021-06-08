import { combineReducers } from 'redux'
import loader from './loader/reducer'
import page from './page/reducer'
import resource from './resource/reducer'
import modal from './modal/reducer'
import user from './user/reducer'

const reducers = combineReducers({
  loader,
  page,
  resource,
  modal,
  user
})

export default reducers
