
import { actionObject } from '@utils'
import { CLOSE_MODAL, OPEN_MODAL } from './action-types'

export const openModal = (data) => actionObject(OPEN_MODAL, { modal: true, modalType: data })

export const closeModal = () => actionObject(CLOSE_MODAL, { modal: false, modalType: null })