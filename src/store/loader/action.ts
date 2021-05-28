import { actionObject } from '@utils'
import { LOADER } from './action-types'

export const setLoader = (show: boolean) => actionObject(LOADER, show)
