import { actionObject } from '@utils'
import { ALERT } from './action-types'

export const setAlert = (message, show: boolean, type) => actionObject(ALERT, { message, show, type })
